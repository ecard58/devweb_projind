import jblogo from "../../components/img/logo.png";

function Contato() {
  return (
    <div>
      <h1>Contato</h1>
      <img src={jblogo} alt="JamBand logo" width={200} />
      <div>
        <main>
          <h3>Fale conosco através de:</h3>

          <p>
            Telefone: +55 24 2233-4455 <br />
            <br />
            Whatsapp: +55 24 999.888.777
            <br />
            <br />
            E-mail: contato@jamband.com.br
          </p>
        </main>
      </div>
    </div>
  );
}

export default Contato;
