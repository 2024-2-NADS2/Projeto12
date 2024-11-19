import Form from "../../components/Form/form";
import Header from "../../components/Header/header";
import styles from "./cadastro.css";
import Section from "../../components/Section/section";

function Cadastro() {
  return (
    <div>
      <Header />
      <div className="section-cadastro">
        <div className="container-title">
          <h1>Registre sua instituição de educação infantil</h1>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
