import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {                        
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const tyhjenda = () => {
    // ostukorvFailist = [];
    ostukorvFailist.splice(0); // kustutab algusest lõpuni
    uuendaOstukorv(ostukorvFailist.slice()); // iga kord kui ma array'sid uuendan siis pean panema .slice()
  }

  const kustuta = (index) => {  // splice sees pean ütlema mitmendat ja mitu tükki
    ostukorvFailist.splice(index,1);    // [].sort()   [].filter()   [].map()    [].slice()    [].splice()
    uuendaOstukorv(ostukorvFailist.slice());
  }

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(element => summa = summa + element.hind);
    return summa;
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length > 0 && <div>Kokku esemeid ostukorvis: {ostukorv.length} tk</div>}
      {ostukorv.map((element, index) => 
        <div>
          <img className="pilt" src={element.pilt} alt="" />
          <div>{element.nimi}</div>
          <div>{element.hind}</div>
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}
      {ostukorv.length === 0 && 
      <div>
        <div>Ostukorv on tühi</div>
        <Link to="/">Tooteid lisama</Link>
      </div>}
      {ostukorv.length > 0 && <div>Hind kokku: {arvutaKogusumma()}</div>}
    </div>
  )
}

export default Ostukorv