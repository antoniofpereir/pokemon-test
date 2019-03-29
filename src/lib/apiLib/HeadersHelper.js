/**
 * Add additional headers to initial headers.
 *
 * @param {*} headers
 * @param {*} additionalHeaders
 */
function addAdditionalHeaders(headers, additionalHeaders) {
  additionalHeaders.forEach((additionalHeader) => {
    if (typeof additionalHeader === 'function') {
      const additionalHeaderExecuted = additionalHeader();
      Object.assign(headers, additionalHeaderExecuted);
    } else {
      Object.assign(headers, additionalHeaders);
    }
  });
}

/**
 * Remove properties with null values to prevent them from
 * being included in the request headers.
 *
 * @param {*} headers
 */
function filterNullHeaders(headers) {
  Object.entries(headers).forEach((singleHeader) => {
    if (singleHeader[1] === null) {
      // eslint-disable-next-line no-param-reassign
      delete headers[singleHeader[0]];
    }
  });
}

/**
 * Build headers object to use in requests.
 *
 * @param {*} initialHeaders default headers object.
 * @param  {...any} additionalHeaders additional headers spread.
 */
export default function buildHeaders(initialHeaders, ...additionalHeaders) {
  const headers = { ...initialHeaders };

  if (additionalHeaders) {
    addAdditionalHeaders(headers, additionalHeaders);
  }

  filterNullHeaders(headers);

  return headers;
}
