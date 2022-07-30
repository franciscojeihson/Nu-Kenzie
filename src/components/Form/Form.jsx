import { useState } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Form = ({ listTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const selects = [
    { id: "Entrada", name: "Entrada" },
    { id: "Despesa", name: "Despesa" },
  ];

  const data = {
    description,
    value,
    type,
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={(event) => event.preventDefault()}>
        <label className="lableDescription" htmlFor="Descrição">
          Descrição
          <input
            className="inputDescription"
            placeholder="Digite aqui sua descrição"
            id="Descrição"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </label>
        <h2 className="titleEx">Ex: Compra Roupas</h2>
        <div className="inputsValueType">
          <div className="inputValue">
            <label htmlFor="valueForm">
              Valor
              <input
                className="valueInput"
                id="valueForm"
                placeholder="1 R$"
                type="number"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              ></input>
            </label>
          </div>
          <div className="inputType">
            <label>
              Tipo do valor
              <select
                className="typeInput"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {selects.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <button
          className="buttonInput"
          type="submit"
          onClick={() => {
            data.description.length > 0 && data.value.length && listTransactions(data);
            data.description.length > 0 && data.value.length
              ? data.type === "Entrada" &&
                toast.success(`Entrada adicionada com sucesso!`)
              : toast.error(`Digite todos os campos`);
            data.description.length > 0 &&
              data.type === "Despesa" &&
              toast.success(`Despesa adicionada com sucesso!`);
            setValue("");
            setDescription("");
            setType("Entrada")
          }}
        >
          Inserir valor
        </button>
      </form>
    </>
  );
};

export default Form;