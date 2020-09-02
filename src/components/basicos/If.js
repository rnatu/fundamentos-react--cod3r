export default function (props) {
  if (props.test) {
    return props.children;
  }
  return false;
}
