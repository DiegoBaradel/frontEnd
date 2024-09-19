import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <main className='container'>
        <Menu />
        <Routes>
          <Route path='/' element={<Banner />}>
            <Route index element={<Inicio />} />
            <Route path='Cardapio' element={<Cardapio />} />
            <Route path='Sobre' element={<Sobre />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}