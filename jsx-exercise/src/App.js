import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import EngineeringTopics from './EngineeringTopics';


const currentYear = new Date().getFullYear();
const isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please login"}</p>

      <Home title="Home Page:" desc="Welcome to our website."/>
      <About title="About Us:" desc="We are passionate about delivering quality experiences."/>
      <Contact title="Contact Us:" desc="Feel free to reach out to us via email or phone." />
      <EngineeringTopics />
    </div>
  );
}

export default App;
