// import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://nobecars.com/wp-content/uploads/2022/01/Untitled-2-5-1024x473.png" alt="" />
      </Link>
      
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      {/* telia.ee    <div></div> */}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
      </Routes>
    </div>
  );
}

export default App;

// ctrl + ä on kommentaar, mis nö kustutab koodi,
//    aga jätab meile alles et hiljem vaadata

// algus ja lõpu tagiga: div, span, button, h1, p, h2, h3, Routes
// isesulguv self-closing: img, input, Route

// KÕIK mis on HTMLs suure tähega ja rohelisega, peab importima
