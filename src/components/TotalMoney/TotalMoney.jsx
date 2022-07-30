import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const receive = listTransactions
    .filter(({ type }) => type === "Entrada")
    .reduce((a, { value }) => a + Number(value), 0);

  const expense = listTransactions
    .filter(({ type }) => type === "Despesa")
    .reduce((a, { value }) => a + Number(value), 0);

  const result = receive - expense;

  return (
    <>
      <div className="divTotalMoney">
        <div className="divH1H2">
          <h1 className="titleVlue">Valor total:</h1>
          <h2 className="subTitleValue">O valor se refere ao saldo</h2>
        </div>
        <span className="toralValue">R$ {result}</span>
      </div>
    </>
  );
};

export default TotalMoney;