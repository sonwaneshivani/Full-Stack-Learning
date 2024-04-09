import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <h1>I am starting</h1>

      <Router>
        <div className="container">
          <nav>
            <img src={logo} width="50px" height="50px"/>
           <ul>
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/AboutUs">AboutUs</Link>
            </li>
            <li>
              <Link className="nav-link" to="/ContactUs">ContactUs</Link>
            </li>
           </ul>
          </nav>

          {/* Wrap Route components with Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
