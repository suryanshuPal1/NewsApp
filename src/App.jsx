import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import MainHomePage from './Pages/MainHomePage';
import Budget from './Components/Home/Budget';
import Technology from './PagesOfHome/Technology';

import './App.css';
import DailyReport from './PagesOfHome/DailyReport';
import EditorPack from './PagesOfHome/EditorPack';
import MostRead from './PagesOfHome/MostRead';
import TopNews from './PagesOfHome/TopNews';
import Crime from './Components/Home/Crime';
import InnerCrime from './Components/Home/InnerCrime';
import Login from './authpages/authLoginPages/Login';
import Signup from './authpages/authSignUpPages/Signup';
import ResetPass from './authpages/authLoginPages/ResetPass';
import PassVerification from './authpages/authLoginPages/PassVerification';
import ForgetPassword from './authpages/authLoginPages/ForgetPassword';


function App() {
  const location = useLocation(); // Get current route
  
  const isLoginPage = location.pathname === "/log-in"; // if login page is on

  return (
    <div className="bg-gray-100 min-h-screen">
      {!isLoginPage && <Logo />}
      {!isLoginPage && <Navbar />}

      <Routes>
        {/* Login Page */}
        <Route path="/log-inxx" element={<Login />} />
        {/* <Route path="/sign-up" element={<Signup />} /> */}

        {/* Other Pages */}
        <Route path="/" element={<MainHomePage />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/daily-report" element={<DailyReport />} />
        <Route path="/editor-pack" element={<EditorPack />} />
        <Route path="/most-read" element={<MostRead />} />
        <Route path="/top-news" element={<TopNews />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/innercrime" element={<InnerCrime />} />
        <Route path="/budget-2025" element={<Budget />} />
      </Routes>

      {/* Hide Footer when on Login Page */}
      {!isLoginPage && <Footer />}

      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <ForgetPassword/> */}
    </div>
  );
}

export default App;
