import {Routes, Route, useLocation} from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
    const location = useLocation()
  return (
    <>
      <Header />
      <Main>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={
            <HomePage />
          } />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;