import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para redirecionamento
import "./formLogin.css";

function FormLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Instancia o hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpa mensagens anteriores
    setSuccessMessage("");

    try {
      const response = await fetch("https://6z5mmk-3050.csb.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        console.log("Login bem-sucedido:", data);

        // Redireciona para a rota /game2 com o username
        navigate("/game", { state: { username: formData.username } });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      setErrorMessage("Erro de rede. Tente novamente.");
      console.error("Erro de rede:", error);
    }
  };

  return (
    <div className="login-page-container">
      <form className="login-page-form" onSubmit={handleSubmit}>
        <h2 className="login-page-title">Login</h2>
        <div className="login-page-form-group">
          <label htmlFor="username" className="login-page-label">
            Usuário
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="login-page-input"
          />
        </div>
        <div className="login-page-form-group">
          <label htmlFor="password" className="login-page-label">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="login-page-input"
          />
        </div>
        {errorMessage && <p className="login-page-error">{errorMessage}</p>}
        {successMessage && (
          <p className="login-page-success">{successMessage}</p>
        )}
        <button type="submit" className="login-page-button">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
