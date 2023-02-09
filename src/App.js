import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FactPage from './pages/FactPage';
import FactsListPage from './pages/FactsListPage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateLoginPage from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/facts' element={<FactsListPage />} />
            <Route path='/facts/:factId' element={<FactPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-account' element={<CreateLoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
