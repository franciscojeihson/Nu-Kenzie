import "./style.css";

function Card({ description, type, value }) {
  return (
    <li>
      <div>
        <p>{description}</p>
        <span>{type}</span>
      </div>
      <span>R$: {value}</span>
      <div className="box-delete">
        <img src="/assets/trash.svg" alt="deletar" />
      </div>
    </li>
  );
}

export default Card;
