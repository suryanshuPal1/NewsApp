import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import MainHomePage from './Pages/MainHomePage';
import Budget from './Components/Home/Budget';
import Technology from './PagesOfHome/Technology';

import './App.css';
import DailyReports from './Pages/SubDomain/DailyReports';
import EditorPack from './PagesOfHome/EditorPack';
import MostRead from './PagesOfHome/MostRead';
import TopNews from './PagesOfHome/TopNews';
import Crime from './Components/Home/Crime';
import InnerCrime from './Components/Home/InnerCrime';
import Login from './authpages/authLoginPages/Login';

import AboutUs from './Pages/AboutUs';
import TrendingTopics from './Pages/TrendingTopics';

function App() {
  const location = useLocation(); // Get current route
  
  const isLoginPage = location.pathname === "/log-in"; // if login page is on

  return (
    <div className="bg-gray-100 min-h-screen">
      {!isLoginPage && <Logo />}
      {!isLoginPage && <Navbar />}

      <Routes>
        {/* Login Page */}
        <Route path="/log-in" element={<Login />} />

        {/* Other Pages */}
        <Route path="/" element={<MainHomePage />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/daily-report" element={<DailyReports />} />
        <Route path="/editor-pack" element={<EditorPack />} />
        <Route path="/most-read" element={<MostRead />} />
        <Route path="/top-news" element={<TopNews />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/innercrime" element={<InnerCrime />} />
        <Route path="/budget-2025" element={<Budget />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/trending-topics" element={<TrendingTopics />} />
      </Routes>

      {/* Hide Footer when on Login Page */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
