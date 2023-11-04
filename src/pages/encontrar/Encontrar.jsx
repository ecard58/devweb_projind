import jblogo from "../../components/img/logo.png";
import "../../components/navbar/style.css";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://6542c2b401b5e279de1f8b4a.mockapi.io/musicos";

function Encontrar() {
  const [musicos, setMusicos] = useState([]);
  const [loading, setLoading] = useState("false");
  const [pesquisa, setPesquisa] = useState("");

  const getMusicos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setMusicos(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMusicos();
  }, []);

  const pesquisaMusicos = musicos.filter((musico) => {
    return (
      musico.nome.toLowerCase().startsWith(pesquisa.toLowerCase()) ||
      musico.cidade.toLowerCase().startsWith(pesquisa.toLowerCase()) ||
      musico.instrumento.toLowerCase().startsWith(pesquisa.toLowerCase())
    );
  });

  return (
    <div>
      <img className="float-right" src={jblogo} alt="JamBand logo" width={50} />
      <h1>Encontrar</h1>

      <label>
        Pesquise por nome, cidade ou instrumento
        <br />
        <input
          type="text"
          placeholder="Pesquise por nome, cidade ou instrumento"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          style={{ margin: 20, padding: 10, width: 255 }}
        />
      </label>
      <br />

      <button onClick={getMusicos} disabled={true}>
        Listar todos os Músicos
      </button>
      {pesquisaMusicos.map((item) => (
        <div key={item.id}>
          <h3>
            {item.nome} - {item.instrumento}, {item.cidade}{" "}
            <button style={{ margin: 10, padding: 10 }}>Enviar mensagem</button>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Encontrar;
