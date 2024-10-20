import Button from '../Button/button'
import styles from './header.css'

function Header(){
    return(
        <header>
            <div>

            <div className="logo">Zoop</div>
            <div className="header-menu">
                <nav>
                    <a className="nav-links" href="#">Home</a>
                    <a className="nav-links" href="#">Sobre</a>
                    <Button>Contato</Button>
                </nav>
            </div>

            </div>
        </header>
    )
}

export default Header