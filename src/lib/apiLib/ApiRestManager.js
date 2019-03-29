import { METHODS } from 'constants';

/**
 * HTTP GET method implementation
 *
 * @param {String} url to the specified resource
 * @param {*} headers to be included in the request
 */
export function get(url, headers) {
  const method = METHODS.GET;

  return fetch(url, {
    method,
    headers,
  });
}

/**
 * HTTP POST method implementation
 *
 * @param {String} url to the specified resource
 * @param {*} headers to be included in the request
 * @param {*} data to include in the request body
 */
export function post(url, headers, data) {
  const method = METHODS.POST;

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  });
}

/**
 * HTTP PUT method implementation
 *
 * @param {String} url to the specified resource
 * @param {*} headers to be included in the request
 * @param {*} data to include in the request body
 */
export function put(url, headers, data) {
  const method = METHODS.PUT;

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  });
}

/**
 * Receives an object containing any parameters to be added as query parameters
 * in the request url.
 *
 * @param {String} url to the specified resource
 * @param {*} params to be included in the url
 */
export function encodeQueryToURI(url, params) {
  return `${url}?${Object.keys(params)
    .map(key => [key, params[key]]
      .map(encodeURIComponent)
      .join('='))
    .join('&')}`;
}
