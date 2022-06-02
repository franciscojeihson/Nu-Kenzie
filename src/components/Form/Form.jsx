import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");

  function addtoList() {
    const obj = {
      description: description,
      value: Number(value),
      type: type,
    };
    if (obj.type === "saida") {
      obj.value = obj.value * -1;
      setListTransactions([...listTransactions, obj]);
    } else {
      setListTransactions([...listTransactions, obj]);
    }
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="tipo-valor">
            <p>Tipo de valor</p>
            <select
              name="select"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir Valor</button>
      </form>
    </>
  );
}

export default Form;
