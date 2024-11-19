import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import FormLogin from "../../components/FormLogin/formLogin";
import Section from "../../components/Section/section";

function Login() {
  return (
    <div>
      <Header />
      <Section sectionColor={"section-missao"}>
        <FormLogin />
      </Section>

      <Footer />
    </div>
  );
}

export default Login;
