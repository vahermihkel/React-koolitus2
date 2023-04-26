import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import { useState } from 'react';

function App() {
  const [teema, uuendaTeema] = useState("hele-leht");

  return (
    <div className={teema}>
    {/* <div className={teema === "hele" ? "hele-leht" : "tume-leht" }> */}
      {teema === "hele-leht" && <button onClick={() => uuendaTeema("tume-leht")}>Tume leht</button>}
      {teema === "tume-leht" && <button onClick={() => uuendaTeema("hele-leht")}>Hele leht</button>}

      <Link to="/">
        <img className="pilt" alt="" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" />
      </Link>
      
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="meist" element={ <Meist /> } />
      </Routes>
    </div>
  );
}

export default App;
