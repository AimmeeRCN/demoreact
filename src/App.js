import logo from './logo.svg';
import './App.css';
import penguin from "./assets/penguin.png";
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./component/Header";
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>

      <Routes>
      <Route path="/Sign-up" element={<Signup/>}></Route>
      </Routes>

      <Routes>
      <Route path="/Sign-in" element={<Signin/>}></Route>
      </Routes>

      <Routes>
      <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={penguin} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100008808760131"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </header>
    </div>*/
  );
}

export default App;
