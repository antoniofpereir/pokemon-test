const FUNCTION = "function";

/**
 * Injects 'this' into each prop that is a function.
 */
export default function injectThis(contextThis, props) {
  if (props !== undefined) {
    Object.values(props).forEach(prop => {
      if (typeof prop === FUNCTION) {
        prop.bind(contextThis);
      }
    });
  }

  return props;
}
