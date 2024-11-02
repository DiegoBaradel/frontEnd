import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Adimin from 'pages/Adimin';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

export default function AppRoutes() {

  const Cardapio = lazy(() => import('pages/Cardapio'));
  const Inicio = lazy(() => import('pages/Inicio'));
  const Banner = lazy(() => import('components/Banner'));
  const NotFound = lazy(() => import('pages/NotFound'));
  const Prato = lazy(() => import('pages/Prato'));
  const Sobre = lazy(() => import('pages/Sobre'));

  return (
    <BrowserRouter>
      <main className='container'>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<Banner />}>
              <Route index element={<Inicio />} />
              <Route path='Cardapio' element={<Cardapio />} />
              <Route path='Sobre' element={<Sobre />} />
              <Route path='adimin/:adimin' element={<Adimin />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </BrowserRouter >
  );
}