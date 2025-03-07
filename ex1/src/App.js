import logo from './logo.svg';
import './App.css';


const currentYear = new Date().getFullYear();
const isLoggedIn = false;

function App() {

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please login"}</p>
    </div>
  );
}

export default App;
