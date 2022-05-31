import "./style.css";

function Card({ description, type, value }) {
  return (
    <li>
      <div>
        <p>{description}</p>
        <span>{type}</span>
      </div>
      <span>R$: {value}</span>
      <button>Delete</button>
    </li>
  );
}

export default Card;
