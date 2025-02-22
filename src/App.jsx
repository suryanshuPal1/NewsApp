import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import MainHomePage from './Pages/MainHomePage';
import Budget from './Components/Home/Budget';
import Technology from './PagesOfHome/Technology';

import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Logo />
        <Navbar />

        <Routes>
          {/* Pages of Navbar */}
          <Route path="/" element={<MainHomePage />} />
          <Route path="/budget-2025" element={<Budget />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
