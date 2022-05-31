import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";

import TotalMoney from "./components/TotalMoney/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  return (
    <>
      <Header />
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
  );
}

export default App;
