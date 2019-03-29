import uuidv4 from 'uuid/v4';
import { SESSION_STORAGE_NAME } from 'constants';

/**
 * Generate a message id to include in requests.
 */
export function includeMessageId() {
  return { messageId: uuidv4() };
}

/**
 * Retrieve JWT from session storage to include in.
 */
export function includeJwt() {
  const jwt = sessionStorage.getItem(SESSION_STORAGE_NAME);
  return { jwt };
}
