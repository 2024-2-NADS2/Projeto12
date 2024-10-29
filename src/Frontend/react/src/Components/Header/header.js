import Button from '../Button/button'
import styles from './header.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Header(){
    return(
        <header>
            <div>

            <div className="logo">Zoopi</div>
            <div className="header-menu">
                <nav>
                    <a className="nav-links" href="#">Home</a>
                    <a className="nav-links" href="#">Sobre</a>
                    <a className="nav-links" href="https://cautious-couscous-q5jq99jgjgrf4pqg-3000.app.github.dev/cadastro">Cadastro</a>
                    
                    <Button>Contato</Button>
                </nav>
            </div>

            </div>
        </header>
    )
}

export default Header