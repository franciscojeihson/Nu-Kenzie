import "./style.css"

const List = ({ listTransactions, setFilterList }) => {

  const filtrarTodos = () => {
    setFilterList(listTransactions)
  }


  const filtrarDespesas = () =>{
    const result = listTransactions.filter(({type}) => type === "Despesa")
    setFilterList(result)
  }

  const filtrarEntradas = () =>{
    const result = listTransactions.filter(({type}) => type === "Entrada")
    setFilterList(result)
  }

  return (
    <>
      <div className="divResumo">
        <h1 className="titleList">Resumo financeiro</h1>
      <div className="divList">
        <button onClick={() => filtrarTodos()} className="allButton">Todos</button>
        <button onClick={() => filtrarEntradas()} className="inButton">Entradas</button>
        <button onClick={() => filtrarDespesas()} className="outButton">Despesas</button>
      </div>
      </div>
    </>
  );
};

export default List;