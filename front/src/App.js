
import './App.css';
import ClientesList from './pages/ClientesList'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/ClientNavbar';
import Home from './Components/Pages/Home';
import Hotels from './Components/Pages/Hotels';
import Contact from './Components/Pages/Contact';
import Clients from './Components/Pages/Clients';
import AdminHomePage from './Components/Pages/AdminHomePage';
import ClientHomePage from './Components/Pages/ClientHomePage';

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
            <Route path='/' element={<Clients />} />
            <Route path='hotels' element={<Hotels />} />
            <Route path='contact' element={<Contact />} />
            <Route path='clients' element={<Clients />} />
            <Route path='adminhomepage' element = {<AdminHomePage />} />
            <Route path='clienthomepage' element = {<ClientHomePage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
