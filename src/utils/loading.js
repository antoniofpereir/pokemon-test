const LoadingPlaceholder = ({ mustHave, placeholder, children }) =>
  (mustHave.length === 0) ? placeholder : children();

export default LoadingPlaceholder;
