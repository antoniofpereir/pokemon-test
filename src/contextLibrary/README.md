# Context Lib

Global state management for react applications, using the context api introduced in **React@16.3.0**.


## Define functional set states
The **setState()** method from react components accepts a function as state change, referred to as **functional set state**. 
For each interaction with the state created by this library, a functional set state should be created, to be associated with an action definition.

```js
// currentState is passed as a new object, meaning that
// changing it will not change its original memory reference
// of the component state, guaranteeing immutability.
export function setRandomState(currentState, newData) {
	// data transformation
	let { randomStuff } = currentState;
	randomStuff = newData;
	
	// return either a set of elements from the state or 
	// the full object to replace the whole state.
	return { randomStuff };
}
```

## Assign functional set states to actions
Create an object containing a mapping of the functional set states with an action string.

```js
import { setRandomState } from  '../stateChanges/randomStateChanges';

export const actions = {
	'SET_RANDOM_STATE':  setRandomState,
	// ...
}
```
## initContext

```js
import { initContext } from  '../contextLibrary';
import { actions } from  './actionsDirectory';

// Context data objects
const  randomStuff  = {
	// ...
};  

// State will be saved to local storage after each update
const  localStorageName  =  'random_context';

// Generating Context Provider
export const ContextProvider = initContext(
								  localStorageName,
								  actions,
								  {
								    randomStuff,
								    // ...
								  });
```

## Wrap application with provider

```js
import { ContextProvider } from './context';

// ContextProvider can receive props and will spread them through context
// but this "stateless context" will not be part of the main component's state
// and therefore cannot be dynamically changed.
ReactDOM.render(
  <ContextProvider randomStatelessContext={randomData} >
    <App />
  </ContextProvider>,
  document.getElementById('root'));
```

## Access context
Starting from React v16.6.0, context can be accessed by passing the context object to a static contextType.
```js
import { Context } from 'contextLibrary';

class RandomComponentThatNeedsContext extends React.Component {
  static contextType = Context;
  ...
  
  render() {
      <div>
        {this.context.randomStuff.randomString}
      </div>
  }
}
```
## Execute actions

After injecting the context in a component, you have access to `this.context.execute()`, which receives an action string (assigned to a functional set state) and any parameters passed, that can be used in the functional set state called by the action.
```js
this.context.execute('SET_RANDOM_STATE', randomObjectUsedInFunctionalSetState);
```
## Execute requests
A component injected with this context will also have access to `this.context.executeRequest()`, which takes a function as first argument and any parameters next. The function passed to `executeRequest()` will have access to `this.execute()`, allowing an asynchronous request to execute an action to change the context state with the api response.
```js
randomRequest(randomParam) {
    fetch(url, {
        ...
        body: JSON.stringify(randomParam)
    })
    .then(response => response.json())
    .then(responseJson => {
        this.execute('SET_RANDOM_STATE', responseJson.randomResponse);
    })
}

this.context.executeRequest(randomRequest, randomParam);
```