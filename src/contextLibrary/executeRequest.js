/**
 * Injects the context 'this' in the request function.
 * Allows the execution of the 'execute' function inside the request
 * to use the request response to set the context state.
 * @param {*} request 
 * @param {*} params 
 */
export default function executeRequest(request, params) {
  const requestWithThis = request.bind(this);
  requestWithThis(params);
}
