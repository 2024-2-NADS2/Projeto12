import styles from './form.module.css'

function Form() {
    return (
            <div className={styles['form-container']}>
                <form>
                    <h1>Registre-se</h1>

                    <div>
                        <label for="firstname">Primeiro Nome</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required></input>
                    </div>

                    <div>
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu email" required></input>
                    </div>


                    <div>
                        <label for="number">CEP</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required></input>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
    )
}

export default Form