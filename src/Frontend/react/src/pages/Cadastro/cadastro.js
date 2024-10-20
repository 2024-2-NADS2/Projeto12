import Form from "../../Components/form/Form";
import Header from "../../Components/Header/header";
import styles from './cadastro.css'

function Cadastro() {
    return (
        <div>
            <div className="section-cadastro">
                <div className="container-title">
                    <h1>Registre sua instituição de educação infantil</h1>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Cadastro