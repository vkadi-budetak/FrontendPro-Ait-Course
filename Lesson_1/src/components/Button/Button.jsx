import "./styles.css";

function Button({ name, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

// props = {
// name:
// onClick:
//}

// return <button className="button">{props.name}</button>; - или использую деструктуризацию как в примере
// {name, onClick} = props
