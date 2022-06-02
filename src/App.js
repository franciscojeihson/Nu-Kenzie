import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import StartPage from "./components/StartPage";

import TotalMoney from "./components/TotalMoney/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [initialPage, setInitialPage] = useState(true);
  return (
    <>
      {initialPage ? (
        <StartPage initialPage={initialPage} setInitialPage={setInitialPage} />
      ) : (
        <>
          <Header initialPage={initialPage} setInitialPage={setInitialPage} />
          <main>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <List listTransactions={listTransactions} />
          </main>
          <div className="total-acc">
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
