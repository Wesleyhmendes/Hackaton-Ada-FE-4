import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DicasEtnia from './pages/Dicas/DicasEtnia';
import DicasClasseSocial from './pages/Dicas/DicasClasseSocial';
import DicasEscolaridade from './pages/Dicas/DicasEscolaridade';
import DicasGenero from './pages/Dicas/DicasGenero';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/dicas/classe-social" element={ <DicasClasseSocial /> } />
      <Route path="/dicas/escolaridade" element={ <DicasEscolaridade /> } />
      <Route path="/dicas/etnia" element={ <DicasEtnia /> } />
      <Route path="/dicas/genero" element={ <DicasGenero /> } />
    </Routes>
  );
}

export default App;
