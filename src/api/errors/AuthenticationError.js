import { routes } from 'resources/navigation';

const DEFAULT_ERROR_MESSAGE = 'Authentication has failed.';

/**
 * Error thrown when a request returns a 401 status code
 * indicating failure in the validation of the JSON Web Token.
 */
class AuthenticationError extends Error {
  constructor(message = DEFAULT_ERROR_MESSAGE) {
    super(message);
    this.name = 'AuthenticationError';

    /**
     * Method called to resolve this error by
     * clearing the local and session storages and
     * redirecting to the block screen.
     */
    this.resolve = () => {
      console.error(this.message);
      localStorage.clear();
      sessionStorage.clear();
      window.location.assign(routes.block);
    };
  }
}

export default AuthenticationError;
