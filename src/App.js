import { Register } from './components/auth/Register';
import { Login } from './components/auth/login';
import { Logout } from './components/auth/logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
