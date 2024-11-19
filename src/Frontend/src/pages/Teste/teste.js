import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa o hook para acessar o estado
import "./teste.css";
import Header from "../../components/Header/header";
import Section from "../../components/Section/section";
import Footer from "../../components/Footer/footer";

const levels = [
  {
    description:
      "Ajude o robô a andar 3 passos para frente. Complete a função:",
    initialCode: "function andarParaFrente() {\n  // Seu código aqui\n}",
    solution: "robot.andar(3);",
    hint: "Use robot.andar(3) para fazer o robô andar 3 passos.",
  },
  {
    description: "Faça o robô virar à direita e andar 2 passos:",
    initialCode: "function virarEDepoisAndar() {\n  // Seu código aqui\n}",
    solution: "robot.virar('direita'); robot.andar(2);",
    hint: "Use robot.virar('direita') e depois robot.andar(2).",
  },
  // Continue os níveis conforme necessário...
];

const Teste = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [hint, setHint] = useState("");
  const [rewards, setRewards] = useState([]);
  const location = useLocation(); // Recupera o estado passado pelo login
  const username = location.state?.username || "Usuário"; // Define um fallback

  useEffect(() => {
    loadLevel(currentLevel);
  }, [currentLevel]);

  const loadLevel = (level) => {
    setUserCode(levels[level].initialCode);
    setHint(""); // Limpa a dica ao carregar um novo nível
  };

  const checkSolution = () => {
    const solution = levels[currentLevel].solution.trim();
    if (userCode.includes(solution)) {
      alert("Parabéns! Você completou o nível!");
      setRewards((prevRewards) => [
        ...prevRewards,
        `Nível ${currentLevel + 1} concluído!`,
      ]);

      if (currentLevel < levels.length - 1) {
        setCurrentLevel((prev) => prev + 1);
      } else {
        alert("Você concluiu todos os níveis!");
      }
    } else {
      alert("Solução incorreta. Tente novamente!");
    }
  };

  const showHint = () => setHint(levels[currentLevel].hint);

  return (
    <div>
      <Header />
      <Section sectionColor={"section-missao"}>
        <div id="game-container">
          <h1>Jogo de Lógica de Programação</h1>
          <h2>Bem-vindo, {username}!</h2> {/* Saudação com o nome do usuário */}
          <div id="game-area">
            <div id="level-container">
              <h2>
                Nível <span id="current-level">{currentLevel + 1}</span>
              </h2>
              <div id="instructions-panel">
                <h3>Instruções:</h3>
                <p id="problem-description">
                  {levels[currentLevel].description}
                </p>
              </div>
              <div id="code-input">
                <textarea
                  id="user-code"
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  rows="6"
                  cols="50"
                ></textarea>
                <button id="submit-btn" onClick={checkSolution}>
                  Enviar
                </button>
                {levels[currentLevel].hint && (
                  <button id="hint-btn" onClick={showHint}>
                    Dica
                  </button>
                )}
              </div>
              {hint && (
                <p id="hint-text" style={{ display: hint ? "block" : "none" }}>
                  {hint}
                </p>
              )}
            </div>
            <div id="robot-container">
              <div id="robot"></div>
              <div id="game-grid">
                {/* Renderize o grid aqui, se necessário */}
              </div>
            </div>
          </div>
          <div id="rewards-panel">
            <h3>Recompensas</h3>
            <ul id="rewards-list">
              {rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Teste;
