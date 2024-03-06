import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { PersonProvider } from './store/store';
import Formulario from './pages/Formulario';
import Lista from './pages/Lista';

function App() {
  return (
    <PersonProvider>
      <div className="App">      
        <Router>
          <Routes>
            <Route path="/" element={<Formulario />} />          
            <Route path="/lista" element={<Lista />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </Router>
      </div>
    </PersonProvider>
  );
}

export default App;
