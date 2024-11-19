import React, { useState } from "react";
import "./formCadastro.css"; // Inclui o CSS básico

function FormCadastro() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ajuste aqui para a URL do seu backend
      const response = await fetch("https://6z5mmk-3050.csb.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.text();
        console.log("Cadastro bem-sucedido:", data);
        alert("Usuário cadastrado com sucesso!");
      } else {
        console.error("Erro ao cadastrar usuário");
        alert("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      alert("Erro de rede ao tentar cadastrar.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="buttonSubmit" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormCadastro;
