import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Administracao from './pages/Administracao/PaginaBaseAdmin';
import { ThemeProvider } from '@emotion/react';
import { TemaPrincipal } from './Themes/TemaPrincipal';
import Veiculos from './pages/Administracao/Veiculos/Veiculos';
import Viagens from './pages/Administracao/Viagens/Viagens';

function App() {

  return(
    <ThemeProvider theme={TemaPrincipal}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/administracao" element={<Administracao />} />
        <Route path="/administracao/veiculos" element={<Veiculos />}/>
        <Route path="/administracao/viagens" element={<Viagens />}/>
      </Routes>
    </ThemeProvider>

  )
}

export default App
