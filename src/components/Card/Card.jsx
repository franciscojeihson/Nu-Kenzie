import "./style.css";

import { FaTrash } from "react-icons/fa";

const Card = ({ filterList, handleTransitions }) => {
  return (
    <>
      <div>
        {filterList.map((item, index) => (
          <div
          className={item.type === "Entrada" ? "greenClass" : "greyClass"}
          key={index}
          >
            <div className="titlesDiv">
              <h1 className="titleCard">{item.description}</h1>
              <h2 className="subTitleCard">{item.type}</h2>
            </div>
            <div className="valuesDiv">
              <span className="valueCard">R$ {item.value}</span>
              <FaTrash
                className="borderIcon"
                onClick={() => handleTransitions(item)}
                >
                Concluir tarefa
              </FaTrash>
            </div>
          </div>
          )).reverse()}
      </div>
    </>
  );
};

export default Card;
