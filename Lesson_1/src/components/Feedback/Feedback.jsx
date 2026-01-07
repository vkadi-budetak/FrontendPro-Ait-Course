import "./styles.css";

function Feedback({ name, onClick }) {
  return (
        <button className="btn" onClick={onClick}>{name}</button>
  );
}

export default Feedback;
