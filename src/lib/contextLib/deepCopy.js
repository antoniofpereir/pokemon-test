/**
 * Deep copy data to guarantee immutability.
 * @param {*} data
 */
export default function deepCopy(data) {
  return JSON.parse(JSON.stringify(data));
}
