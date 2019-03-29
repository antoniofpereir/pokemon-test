import { AuthenticationError } from 'api/errors';
import {
  routes,
  history,
} from 'resources/navigation';

/**
 * Handles AuthenticationError by evaluating if the error
 * matches the type and calling the resolve method.
 *
 * @param {AuthenticationError} error
 */
export function handleAuthenticationError(error) {
  if (error instanceof AuthenticationError) {
    error.resolve();
  }
}

/**
 * Handles login business errors.
 *
 * @param {String} errorCode PROCESS.XXX
 */
export function handleLoginError(errorCode) {
  if (errorCode === 'PROCESS.055'
    || errorCode === 'PROCESS.056') {
    history.push(routes.home);
  } else if (errorCode === 'PROCESS.052') {
    history.push(routes.shareDetails);
  }
}

/**
 * Handles opt in business errors.
 *
 * @param {String} errorCode PROCESS.XXX
 */
export function handleOptInError(errorCode) {
  if (errorCode === 'PROCESS.053'
    || errorCode === 'PROCESS.055') {
    history.push(routes.home);
  }

  if (errorCode === 'PROCESS.054') {
    history.push(routes.gotDetails);
  }
}

/**
 * Evaluates the response for its status code and
 * throws the corresponding error (if present).
 *
 * @param {*} response
 */
export function evaluateResponse(response) {
  if (response.status === 401) {
    throw new AuthenticationError();
  } else {
    return response.json();
  }
}
