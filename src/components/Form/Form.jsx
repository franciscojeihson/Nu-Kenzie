import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [isExpense, setExpense] = useState(false);

  function addtoList(newList) {
    const newArrTransactions = [{ ...listTransactions, newList }];

    setListTransactions(newArrTransactions);
  }

  return (
    <>
      <form onSubmit={(event) => addtoList(event.preventDefault())}>
        <div className="desc-area">
          <p>Descrição</p>
          <input
            id="desc-input"
            type="text"
            placeholder="Digite aqui sua descrição"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
          <span>Ex.:Compra de roupas</span>
        </div>
        <div className="input-valores">
          <div className="valor-input">
            <p>Valor</p>
            <input
              id="val-input"
              type="number"
              placeholder="1                       R$"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            />
          </div>
          <div className="tipo-valor">
            <p>Tipo de valor</p>
            <select name="select">
              <option value="entrada" onChange={() => setExpense(!isExpense)}>
                Entrada
              </option>
              <option value="saida" onChange={() => setExpense(!isExpense)}>
                Saída
              </option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir Valor</button>
      </form>
    </>
  );
}

export default Form;
