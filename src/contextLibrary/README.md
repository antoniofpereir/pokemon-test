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

stateless context

## Access context

## Execute actions

## Execute requests