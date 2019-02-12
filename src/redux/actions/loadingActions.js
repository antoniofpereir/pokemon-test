import ACTIONS from './constants';

export function startLoading() {
  console.log('Start loading');
  return {
    type: ACTIONS.LOADING.START,
  };
}

export function stopLoading() {
  console.log('Stop loading');
  return {
    type: ACTIONS.LOADING.STOP,
  };
}
