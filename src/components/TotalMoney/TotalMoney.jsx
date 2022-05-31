import "./style.css";

function TotalMoney({ listTransactions }) {
  return (
    <>
      <div className="total">
        <div className="text-total">
          <p>Valor total:</p>
          <span>O valor se refere ao saldo</span>
        </div>
        <span>$ {listTransactions.reduce((a, b) => a + b.value, 0)}</span>
      </div>
    </>
  );
}

export default TotalMoney;
