import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import MainHomePage from './Pages/MainHomePage'
import Budget from './Components/Home/Budget';
import Technology from './PagesOfHome/Technology';
import './App.css';


function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Logo />
      <Navbar />
    
      <Routes>
        {/* pages of navbar */}
        <Route path='/' element={<MainHomePage/>} />
        <Route path='/budget-2025' element={<Budget/>}/>



        {/* pages of home   */}
        <Route path='/technology' element={<Technology/>}/>
      </Routes>

      
  
   <Footer />
   

       
</div>
  )
}

export default App
