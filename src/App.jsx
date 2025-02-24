import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Budget from './Components/Home/Budget';

function App() {
  return (
      <div className="bg-gray-100 min-h-screen">
        <Logo />
        <Navbar />

        <Routes>
          {/* Pages of Navbar */}
          <Route path="/" element={<MainHomePage />} />
          <Route path="/budget-2025" element={<Budget />} />


          {/* pages of home */}
          <Route path="/technology" element={<Technology />}/>
          <Route path="/daily-report" element={<DailyReport />}/>
          <Route path="/editor-pack" element={<EditorPack />}/>
          <Route path="/most-read" element={<MostRead />}/>
          <Route path="/top-news" element={<TopNews />}/>
          <Route path="/crime" element={<Crime />} />
          <Route path="/innercrime" element={<InnerCrime />} />
          <Routes path="/budget-2025" element={<Budget />} />

        </Routes>

        <Footer/>
      </div>
  );
}

export default App;
