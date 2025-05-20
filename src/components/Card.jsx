import "..//styles/styles.css";

function Card({ message1, message2, border }) {
  return (
    <div className="card">
      <div className="message">{message1}</div>
      <div className="message">{message2}</div>
    </div>
  );
}

export default Card;
