import "../Section/section.css";
import Section from "../Section/section";
import ImgBanner from "../../images/img-banner.jpg";

function SectionBanner() {
  return (
    <div>
      <Section sectionColor={"section-banner"}>
        <div className="section-container">
          <div className="section-banner-box">
            <h1>
              Programar é <span className="texto-destaque">divertido,</span>{" "}
              <br />
              Programar é <span className="texto-destaque">inovador</span>
            </h1>
          </div>
          <div className="section-banner-box">
            <img src={ImgBanner} alt="img-banner" />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default SectionBanner;
