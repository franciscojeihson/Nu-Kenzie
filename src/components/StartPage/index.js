import "./style.css";

function StartPage({ initialPage, setInitialPage }) {
  return (
    <>
      <div className="corpo">
        <div className="center">
          <div className="infos">
            <img src="/assets/Nu Kenzie.svg" alt="nukenzie" />
            <h1>Centralize o controle de suas finanças</h1>
            <span>de forma rápida e segura</span>
            <button onClick={() => setInitialPage(!initialPage)}>
              Iniciar
            </button>
          </div>

          <div>
            <img src="/assets/Group 277.svg" alt="ilustração" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;
