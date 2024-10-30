import React, { useState } from 'react';
import styles from './form.module.css';

function Form() {
    const [values, setValues] = useState({
        nomeInstituicao: '',
        email: '',
        cep: '',
        cnpj: ''
    });

    const handleChangeValues = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        try {
            const response = await fetch('http://localhost:3010/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const data = await response.text(); // Lê a resposta do servidor
                console.log(data); // Exibe a resposta no console
            } else {
                console.error('Erro ao enviar os dados');
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    return (
        <div className={styles['form-container']}>
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
