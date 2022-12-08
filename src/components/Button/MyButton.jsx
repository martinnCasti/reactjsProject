import "./button.css";

function MyButton(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default MyButton;
