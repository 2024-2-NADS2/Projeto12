import Section from "../../components/Section/section";
import "../Section/section.css";

import IconMissao from "../../images/target.png";
import IconVisao from "../../images/eye_tracking.png";
import IconValores from "../../images/diamond.png";

function SectionMissao() {
  return (
    <div>
      <Section sectionColor={"section-missao"}>
        <div className="section-container">
          <h1>Missão, Visão e Valores do Projeto</h1>
          <div className="missao-box">
            <div>
              <img src={IconMissao} alt="IconMissao" />

              <h2>Missão</h2>
              <p>
                Inspirar e capacitar crianças com experiências técnológicas
                divertidas, desenvolvendo habilidades digitais para um futuro
                inovador
              </p>
            </div>
            <div>
              <img src={IconVisao} alt="img-visao" />
              <h2>Visão</h2>
              <p>
                Ser referência em educação tecnológica, oferencendo experiências
                inovadoras eu preparam crianças para o mundo digital
              </p>
            </div>
            <div>
              <img src={IconValores} alt="img-Valores" />
              <h2>Valores</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur aperiam a placeat, perferendis dicta reprehenderit?
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default SectionMissao;
