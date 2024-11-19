import React, { useEffect, useState } from "react";
import "./gameContainer.css";
import Section from "../Section/section";

const operators = ["AND", "OR", "NOT", "XOR", "NAND", "NOR"];

function GameContainer() {
  const [score, setScore] = useState(0);
  const [problemCount, setProblemCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [currentProblem, setCurrentProblem] = useState(null);
  const [answers, setAnswers] = useState({});
  const [inputStyles, setInputStyles] = useState({});

  // Gerar um novo problema aleatório
  const generateRandomProblem = () => {
    const operatorIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[operatorIndex];
    let inputs, truthTable;

    if (operator === "NOT") {
      inputs = ["A"];
      truthTable = [
        { A: false, result: true },
        { A: true, result: false },
      ];
    } else {
      inputs = ["A", "B"];
      truthTable = [
        { A: false, B: false, result: null },
        { A: false, B: true, result: null },
        { A: true, B: false, result: null },
        { A: true, B: true, result: null },
      ];

      truthTable.forEach((row) => {
        switch (operator) {
          case "AND":
            row.result = row.A && row.B;
            break;
          case "OR":
            row.result = row.A || row.B;
            break;
          case "XOR":
            row.result = row.A !== row.B;
            break;
          case "NAND":
            row.result = !(row.A && row.B);
            break;
          case "NOR":
            row.result = !(row.A || row.B);
            break;
          default:
            break;
        }
      });
    }

    return { operator, inputs, truthTable };
  };

  // Verificar a resposta fornecida
  const checkAnswer = () => {
    let correct = true;
    let newInputStyles = {};

    // Verificar cada resposta do usuário
    currentProblem.truthTable.forEach((row, index) => {
      const userAnswer = answers[index];
      const correctAnswer = row.result ? "T" : "F";

      if (userAnswer !== correctAnswer) {
        correct = false;
        newInputStyles[index] = { backgroundColor: "#ffcccc" }; // Vermelho para errado
      } else {
        newInputStyles[index] = { backgroundColor: "#ccffcc" }; // Verde para correto
      }
    });

    // Atualizar a pontuação e feedback
    if (correct) {
      setScore(score + 1);
      setFeedback("Correto!");
    } else {
      setFeedback("Incorrect. Try again!");
    }

    setInputStyles(newInputStyles); // Atualizar estilos dos inputs
    setProblemCount(problemCount + 1);

    // Caso o jogador tenha respondido 10 perguntas, finalizar o jogo
    if (problemCount + 1 === 10) {
      endGame();
    } else {
      setTimeout(() => {
        setFeedback("");
        startNewProblem();
      }, 1500);
    }
  };

  // Iniciar um novo problema
  const startNewProblem = () => {
    const newProblem = generateRandomProblem();
    setCurrentProblem(newProblem);
    setAnswers({}); // Resetar respostas
    setInputStyles({}); // Resetar estilos
  };

  // Finalizar o jogo
  const endGame = () => {
    const container = document.querySelector(".container");
    if (container) {
      container.innerHTML = `
        <h1>Game Over</h1>
        <p>Your final score is: ${score} out of 10</p>
        <button onClick="window.location.reload()">Play Again</button>
      `;
    }
  };

  // Inicializar o jogo ao carregar o componente
  useEffect(() => {
    console.log("Script loaded successfully");
    startNewProblem();
  }, []);

  // Atualizar as respostas conforme o usuário interage com os inputs
  const handleInputChange = (index, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: value.toUpperCase(),
    }));
  };

  return (
    <div className="container">
      <h1>Tabela da Verdade</h1>
      <p>
        Pontuação: <span>{score}</span>
      </p>
      <div id="problem-container">
        {currentProblem && (
          <table id="truth-table">
            <thead>
              <tr>
                {currentProblem.inputs.map((input, idx) => (
                  <th key={idx}>{input}</th>
                ))}
                <th>{currentProblem.operator}</th>
              </tr>
            </thead>
            <tbody>
              {currentProblem.truthTable.map((row, index) => (
                <tr key={index}>
                  {currentProblem.inputs.map((input, idx) => (
                    <td key={idx}>{row[input] ? "T" : "F"}</td>
                  ))}
                  <td>
                    <input
                      type="text"
                      maxLength="1"
                      value={answers[index] || ""}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      style={inputStyles[index]} // Aplicar o estilo de fundo do input
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button id="submit-btn" onClick={checkAnswer}>
        Submit
      </button>
      <div
        id="feedback"
        style={{ color: feedback === "Correto!" ? "green" : "red" }}
      >
        {feedback}
      </div>
    </div>
  );
}

export default GameContainer;
