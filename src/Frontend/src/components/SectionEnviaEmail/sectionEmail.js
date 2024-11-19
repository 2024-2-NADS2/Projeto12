import Section from "../Section/section";
import styles from "../Section/section.css";
import "./sectionEmail.css";

function SectionEnviaEmail() {
  return (
    <div>
      <Section sectionColor={"section-alternative"}>
        <div className="section-container-collum">
          <h1>
            Tem alguma dúvida?
            <br /> Fique à vontade para perguntar
          </h1>
          <div>
            <p className="contato-email">contato@zoopi.com</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default SectionEnviaEmail;
