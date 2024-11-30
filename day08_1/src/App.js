import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contactus from './components/ContactUs';

function App() {
  return (
    <div className="App">
     <Router>
      <nav>
        <ul>
          <li><Link to = '/home'>Home</Link></li>
          <li><Link to = '/about'>About Us</Link></li>
          <li><Link to = '/contact'>Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/about' element = {<AboutUs/>}/>
        <Route path = '/contact' element = {<Contactus/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
