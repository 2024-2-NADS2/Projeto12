import Button from '../Button/button'
import styles from './header.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div>
                <div className="header-links">
                    <nav>
                        <a className="nav-links" href="#">Home</a>
                        <a className="nav-links" href="#">Contato</a>
                        <a className="nav-links" href="#">Sobre</a>

                    </nav>
                </div>

                <div className="logo">Zoopi</div>

                <div>
                    <Button>Cadastre-se</Button>
                    <Button>Entrar</Button>
                </div>

            </div>
        </header>
    )
}

export default Header