import Card from "../Card/Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <>
      <div className="top-div">
        <div className="header-acc">
          <p>Resumo financeiro</p>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
        <ul>
          {listTransactions.map(({ description, type, value }, index) => (
            <Card
              description={description}
              type={type}
              value={value}
              key={index}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
