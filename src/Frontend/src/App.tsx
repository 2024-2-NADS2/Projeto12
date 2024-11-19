import React from "react";
import "./index.css"; // Certifique-se de importar o CSS com o estilo .App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro/cadastro";
import Home from "./pages/Home/home";
import Game from "./pages/Game/game";
import Sobre from "./pages/Sobre Nós/sobre";
import RegistroUsuario from "./pages/RegistroUsuario/registroUsuario";
import Login from "./pages/Login/login";
import Teste from "./pages/Teste/teste";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/gameStart" element={<Game />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/game" element={<Teste />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
