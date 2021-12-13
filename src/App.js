import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import BackToTop from './components/shared/BackToTop/BackToTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      
      <Router>    
      <Routes>          
      <Route exact path='/' element={<Home/>}/>
      {/* <Route path='/feature' element={<Features/>}/>
      <Route path='/offer' element={<Offer/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contactus' element={<ContactUs/>} /> */}
      </Routes>
      </Router>
      {/* <BackToTop></BackToTop> */}
    </div>
  );
}

export default App;
