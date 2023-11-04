import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Cadastrar from "./pages/cadastro/Cadastrar";
import Encontrar from "./pages/encontrar/Encontrar";
import Postar from "./pages/postar/Postar";
import Galeria from "./pages/galeria/Galeria";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/encontrar" element={<Encontrar />} />
        <Route path="/postar" element={<Postar />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
