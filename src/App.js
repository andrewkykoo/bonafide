import './App.css';
import AboutPage from './pages/AboutPage';
import FactPage from './pages/FactPage';
import FactsListPage from './pages/FactsListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <h1>Bona Fide</h1>
      <div id='page-body'>
        <HomePage />
        <AboutPage />
        <FactsListPage />
        <FactPage />
      </div>
    </div>
  );
}

export default App;
