import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import { useState } from 'react';
import Hinnad from './pages/Hinnad';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import YksikToode from './pages/YksikToode';
import MuudaToode from './pages/MuudaToode';

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

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/halda">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <Routes>
        {/* <Route path="" element={ <Navigate to="/avaleht" /> } /> */}
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="halda" element={ <HaldaTooted /> } />
        <Route path="toode/:index" element={ <YksikToode /> } />
        <Route path="muuda/:index" element={ <MuudaToode /> } />
      </Routes>
    </div>
  );
}

export default App;
