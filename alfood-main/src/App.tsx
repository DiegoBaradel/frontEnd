import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdiminRestaurantes from './paginas/Admin/Restaurantes';
import FromularioRestaurante from './paginas/Admin/Restaurantes/FormularioRestaurante';
import PaginaBaseAdmin from './paginas/Admin/PaginaBaseAdmin';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin' element={<PaginaBaseAdmin/>}>

        <Route path="restaurantes" element={<AdiminRestaurantes />} />
        <Route path="restaurantes/novo" element={<FromularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FromularioRestaurante />} />

      </Route>

    </Routes>
  );
}

export default App;
