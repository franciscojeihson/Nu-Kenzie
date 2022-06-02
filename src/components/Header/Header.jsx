import "./style.css";
function Header({ initialPage, setInitialPage }) {
  return (
    <header>
      <h1>Nu Kenzie</h1>
      <button onClick={() => setInitialPage(!initialPage)}>Inicio</button>
    </header>
  );
}

export default Header;
