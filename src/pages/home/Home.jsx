import jblogo from "../../components/img/logo.png";

function Home() {
  function encontrar() {
    console.log("Quero encontrar");
  }

  function serEncontrado() {
    console.log("Quero ser encontrado");
  }

  return (
    <div>
      <a href="#" target="_blank">
        <img src={jblogo} className="logo" alt="JamBand logo" />
      </a>
      <h1>JamBand</h1>
      <p>
        Você é um músico estusiasmado em busca de colegas de banda com paixão
        pela música? Ou talvez você esteja procurando por novos parceiros
        musicais para dar vida às suas ideias e composições? Seja você um
        guitarrista, vocalista, baterista, tecladista, ou qualquer outro tipo de
        músico, o JamBand é o seu portal online para encontrar os parceiros
        musicais perfeitos!
      </p>
      <p>
        Imagine um lugar onde você pode se conectar com músicos que compartilham
        a mesma paixão pela música. O JamBand oferece uma plataforma fácil de
        usar, onde músicos de todas as áreas e estilos podem se encontrar,
        colaborar e formar as bandas dos seus sonhos.
      </p>

      <button onClick={encontrar} style={{ margin: 10, padding: 10 }}>
        Encontrar minha banda
      </button>
      <br />
      <button onClick={serEncontrado} style={{ margin: 10, padding: 10 }}>
        Quero ser encontrado por uma banda
      </button>
    </div>
  );
}

export default Home;
