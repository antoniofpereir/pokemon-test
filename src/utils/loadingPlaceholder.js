const loadingPlaceholder = (loading, placeholder) => {
console.log('loading: ', loading);
console.log(typeof children);
  return loading ? placeholder : children;
}
export default loadingPlaceholder;