import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import EmptyCard from "./components/EmptyCard";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import Home from "./components/StartPage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterList, setFilterList] = useState([]);

  const [homePage, setHomePage] = useState(true);

  const toIndex = () => {
    setHomePage(!homePage);
  };

  useEffect(() => {
    setFilterList(listTransactions);
  }, [listTransactions]);

  const addTransitions = (newListTransactions) => {
    setListTransactions([...listTransactions, newListTransactions]);
  };

  const handleTransitions = (item) => {
    const result = listTransactions.filter((element) => element !== item);
    setListTransactions(result);
  };

  return (
      <>
        {homePage ? (<Home toIndex={toIndex}/>)
      : <><Header home={toIndex}/>
      <div className="divMain">
        <div className="divFormMoney">
          <Form listTransactions={addTransitions}/>
          {filterList.length > 0 && (<TotalMoney listTransactions={listTransactions}/>)}
        </div>
        <div className="divListCard">
          <List listTransactions={listTransactions} setFilterList={setFilterList}/>
          {filterList.length < 1 && (<EmptyCard/>)}
          <Card filterList={filterList} handleTransitions={handleTransitions}/>
        </div>
      </div></>} 
      </>
  );
}

export default App;