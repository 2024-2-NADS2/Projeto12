import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Section from "../../components/Section/section";
import FormCadastro from "../../components/FormCadastro/formCadastro";

function RegistroUsuario() {
  return (
    <div>
      <Header />
      <Section sectionColor={"section-missao"}>
        <FormCadastro />
      </Section>

      <Footer />
    </div>
  );
}

export default RegistroUsuario;
