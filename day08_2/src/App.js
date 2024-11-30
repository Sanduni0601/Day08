import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path = '/dash' element = {<DashBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
