import Button from "../Button/button";
import Logo from "../Logo/logo";

import styles from "./header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <div className="header-links, nav-box">
          <nav>
            <a className="nav-links" href="https://s554jl.csb.app/">
              Home
            </a>
            <a className="nav-links" href="https://s554jl.csb.app/sobre">
              Sobre
            </a>
          </nav>
        </div>

        <div>
          <Logo> </Logo>
        </div>

        <div className="nav-box">
          <a href="https://s554jl.csb.app/registro">
            <Button buttonColor={"button"}>Cadastre-se</Button>
          </a>
          <a href="https://s554jl.csb.app/login">
            <Button buttonColor={"buttonSecundary"}>Entrar</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
