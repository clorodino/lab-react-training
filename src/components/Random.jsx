export default function Random(props) {
  return (
    <p>
      Random value between {props.min} and {props.max} =>{' '}
      {Math.random() * (props.max - props.min) + props.min}
    </p>
  );
}
