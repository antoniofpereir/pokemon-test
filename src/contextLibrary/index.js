import React from 'react';
import deepCopy from './deepCopy';
import injectThis from './injectThis';
import executeRequest from './executeRequest';

/**
 * Context object containing the Provider and Consumer objects.
 * The export is necessary in order to use contextType to inject context (React@16.6.0).
 */
const Context = React.createContext();

/**
 * Init app context provider to wrap the application.
 * @param {*} actions object containing the mapping between action tag and functionalSetState.
 * @param  {...any} data objects to create the context state (optional).
 * Returns a wrapper component that will provide the context to all the children.
 */
function initContext(localStorageName, actions, ...data) {
  return class GenericContext extends React.Component {
    constructor() {
      super();

      const defaultContext = Object.assign(...data);
      this.contextFromLocalStorage = this.getContextFromLocalStorage();

      /**
       * Init context with defaultContext if contextFromLocalStorage is empty.
       */
      this.state = this.contextFromLocalStorage || defaultContext;

      /**
       * Execute function decides functionalSetState based on actionType.
       */
      this.execute = (actionType, ...params) => {
        const functionalSetState = actions[actionType];
        this.setStateAndUpdateLocalStorage(functionalSetState, params);
      };

      executeRequest.bind(this);
    }

    /**
     * Saves the state to localStorage after initializing for the first time.
     */
    componentDidMount() {
      if (!this.contextFromLocalStorage) {
        localStorage.setItem(localStorageName, JSON.stringify(this.state));
      }
    }

    /**
     * Uses setState to update context component state and stores the new state in local storage.
     * @param {*} functionalSetState function that returns a state change.
     * @param {*} params used in functionalSetState (optional).
     */
    setStateAndUpdateLocalStorage = (functionalSetState, params) => {
      this.setState(
        prevState => functionalSetState(deepCopy(prevState), ...params),
        () => this.saveContextToLocalStorage()
      );
    };

    /**
     * Retrieves context from localStorage.
     * Surround with try-catch because user privacy settings might not allow local storage.
     */
    getContextFromLocalStorage = () => {
      try {
        return JSON.parse(localStorage.getItem(localStorageName));
      } catch (err) {
        console.error('Error reading from local storage');
        return null;
      }
    };

    /**
     * Saves context state to localStorage.
     * Surround with try-catch because user privacy settings might not allow local storage.
     */
    saveContextToLocalStorage = () => {
      try {
        localStorage.setItem(localStorageName, JSON.stringify(this.state));
        this.contextFromLocalStorage = this.getContextFromLocalStorage();
      } catch (err) {
        console.error('Error saving to local storage');
      }
    };

    /**
     * Wraps children with context provider.
     * Passes state, execute function, executeRequest and every prop passed to the wrapper.
     */
    render() {
      return (
        <Context.Provider value={{
          ...this.state,
          execute: this.execute,
          executeRequest,
          ...injectThis(this, this.props)
        }}
        >
          {this.props.children}
        </Context.Provider>
      );
    }
  };
}

export {
  Context,
  initContext,
}
