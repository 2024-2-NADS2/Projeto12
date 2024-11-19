import React, { useState } from "react";
import axios from "axios"; // Importando axios

function Form() {
  const [values, setValues] = useState({
    nomeInstituicao: "",
    email: "",
    cep: "",
    cnpj: "",
  });

  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    try {
      // Fazendo a requisição POST usando o axios
      const response = await axios.post("https://6z5mmk-3050.csb.app", values, {
        headers: {
          "Content-Type": "application/json", // Definindo o tipo de conteúdo como JSON
        },
      });

      // Verificando a resposta do servidor
      console.log(response.data); // Exibe a resposta no console do frontend
    } catch (error) {
      console.error("Erro ao enviar os dados:", error); // Exibe erro caso ocorra
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Registre-se</h1>

        <div>
          <label htmlFor="nome-instituicao">Nome da instituição</label>
          <input
            id="nome-instituicao"
            type="text"
            name="nomeInstituicao"
            placeholder="Digite o nome da instituição"
            value={values.nomeInstituicao}
            onChange={handleChangeValues}
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={values.email}
            onChange={handleChangeValues}
            required
          />
        </div>

        <div>
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            type="text"
            name="cep"
            placeholder="Digite seu CEP"
            value={values.cep}
            onChange={handleChangeValues}
            required
          />
        </div>

        <div>
          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            type="text"
            name="cnpj"
            placeholder="Digite seu CNPJ"
            value={values.cnpj}
            onChange={handleChangeValues}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Form;
