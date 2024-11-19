import styles from "../../index.css";
import Header from "../../components/Header/header";
import Section from "../../components/Section/section";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";
import SectionBanner from "../../components/SectionBanner/sectionBanner";
import SectionEnviaEmail from "../../components/SectionEnviaEmail/sectionEmail";

function Home() {
  return (
    <div>
      <Header />
      <SectionBanner></SectionBanner>
      <SectionEnviaEmail></SectionEnviaEmail>
      <Footer />
    </div>
  );
}

export default Home;
