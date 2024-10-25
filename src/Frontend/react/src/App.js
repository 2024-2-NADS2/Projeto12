import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro/cadastro';
import Home from './pages/Home/home';



function App() {
  return (
    <Router>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>

      </Routes>
    </Router>
  );
}

export default App
