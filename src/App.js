import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FactPage from './pages/FactPage';
import FactsListPage from './pages/FactsListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Bona Fide</h1>
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/facts' element={<FactsListPage />} />
            <Route path='/facts/:factId' element={<FactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
