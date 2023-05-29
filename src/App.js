import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Services from './pages/Services'
import OurCase from './pages/OurCase'
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// import MainContain from './components/main-Contain/MainContain';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/our-case' element={<OurCase/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;
