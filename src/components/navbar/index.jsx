import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar1">
        <ul>
          <Link to="/">Home &emsp;</Link>
          <Link to="/cadastro">Cadastrar &emsp;</Link>
          <Link to="/encontrar">Encontrar &emsp;</Link>
          <Link to="/postar">Postar &emsp;</Link>
          <Link to="/galeria">Galeria &emsp;</Link>
          <Link to="/contato">Fale Conosco</Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
