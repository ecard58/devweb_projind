import jblogo from "../../components/img/logo.png";
import "../../components/navbar/style.css";
import { useState } from "react";
import axios from "axios";

const url = "https://6542c2b401b5e279de1f8b4a.mockapi.io/musicos";

function Cadastrar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [instrumento, setInstrumento] = useState("");

  const submeter = async () => {
    const novoMusico = {
      nome: nome,
      cidade: cidade,
      instrumento: instrumento,
    };
    try {
      const { data } = await axios.post(url, novoMusico);
      console.log("Músico cadastrado: ", data);
      setNome("");
      setCidade("");
      setInstrumento("");
    } catch (error) {
      console.error("Erro ao cadastrar músico: ", error);
    }
  };

  return (
    <div>
      <img className="float-left" src={jblogo} alt="JamBand logo" width={50} />
      <h1>Cadastrar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ margin: 10, padding: 8 }}
          />
        </label>
        <br />

        <label>
          Cidade-UF
          <input
            type="text"
            placeholder="Ex: Petrópolis-RJ"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            style={{ margin: 10, padding: 8 }}
          />
        </label>
        <br />

        <label>
          Instrumento
          <select
            name="instrumento"
            value={instrumento}
            onChange={(e) => setInstrumento(e.target.value)}
            style={{ margin: 10, padding: 8 }}
          >
            <option value="Vocal">Vocal</option>
            <option value="Guitarra">Guitarra</option>
            <option value="Violão">Violão</option>
            <option value="Baixo">Baixo</option>
            <option value="Bateria">Bateria</option>
            <option value="Teclado">Teclado</option>
          </select>
        </label>
        <br />

        <button onClick={submeter} style={{ margin: 10, padding: 10 }}>
          Submeter
        </button>
      </form>
    </div>
  );
}

export default Cadastrar;
