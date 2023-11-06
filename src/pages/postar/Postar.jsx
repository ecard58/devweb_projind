import jblogo from "../../components/img/logo.png";
import upload from "../../components/img/upload.png";

function Postar() {
  return (
    <div>
      <img className="float-left" src={jblogo} alt="JamBand logo" width={50} />
      <h1>Postar</h1>

      <label>
        <h2>Poste um vídeo com a sua JamBand:</h2>
        <input
          type="text"
          placeholder="Digite aqui o nome da sua banda"
          style={{ margin: 20, padding: 10, width: 255 }}
        />
      </label>
      <br />
      <img src={upload} />
      <br />

      <button>Postar</button>
    </div>
  );
}

export default Postar;
