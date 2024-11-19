import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Section from "../../components/Section/section";
import SectionMissao from "../../components/SectionMissao/sectionMissao";

import IconMissao from "../../images/target.png";
import IconVisao from "../../images/eye_tracking.png";
import IconValores from "../../images/diamond.png";
import ImgMissao from "../../images/img-missao1.jpg";

function Sobre() {
  return (
    <div>
      <Header></Header>
      <SectionMissao></SectionMissao>
      <Section sectionColor={"section-alternative"}>
        <div className="section-2colunas">
          <div>
            <h2>Nossa Missão</h2>
            <p>
              Somos uma equipe focada no desempenho das crianças, como a
              tecnologia só tende a crescer, pensamos em um projeto que
              incentive os jovens a abrirem a mente e se interessem por
              programação. Assim como muitas crianças crescem imersas no mundo
              tecnológico, há aquelas que ficam afastadas desse universo. Nosso
              objetivo é aproximá-las dessa realidade, proporcionando uma
              oportunidade para que desenvolvam seu potencial por meio da lógica
              de programação.
            </p>
          </div>
          <div>
            <img src={ImgMissao} alt="img-missao" />
          </div>
        </div>
      </Section>

      <Footer></Footer>
    </div>
  );
}

export default Sobre;
