import GameContainer from "../../components/gameContainer/gameContainer";
import Header from "../../components/Header/header";
import { Styled } from "styled-components";
import "./game.css";
import Section from "../../components/Section/section";

function Game() {
  return (
    <div>
      <Header />
      <Section sectionColor={"section-missao"}>
        <GameContainer />
      </Section>
    </div>
  );
}

export default Game;
