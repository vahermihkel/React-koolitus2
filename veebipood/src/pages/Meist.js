import React, { useState } from 'react'

// camelCase
// PascalCase
// snake_case
// kebab-case

function Meist() {
  const [tootajad, uuendaTootajad] = useState(["Signe Riisalo","Riina Sikkut","Maarjo Mändmaa","Ulla Saar","Hanna Vseviov", "Heidi Alasepp","Nele Labi"]);
  // ["Signe","Riina","Maarjo","Ulla","Hanna", "Heidi","Nele"]

  const sorteeriEesnimi = () => {
    tootajad.sort(); // default sorteerimine -> A->Z
    uuendaTootajad(tootajad.slice()); // React näeb, et list on samaks jäänud --> .slice kustutab mälukoha ehk teeb koopia
  }

  const sorteeriTahed = () => {
                        //eesmärk: pluss või miinusmärk --> plussmärgiga vahetatakse järjekord
    tootajad.sort((a,b) => a.length - b.length);
    uuendaTootajad(tootajad.slice());
  }

  const filtreeriVah10Tahte = () => {
                                  //    tõde või väär --> tõega jäetakse alles
    const vastus = tootajad.filter(t => t.length >= 10);
    uuendaTootajad(vastus);
  }

  const kustuta = (jrkNr) => {
    tootajad.splice(jrkNr, 1); // splice kustutab
    uuendaTootajad(tootajad.slice()); // slice teeb koopia ja võimaldab uuendada
  }

  return (
    <div>
      <button onClick={sorteeriEesnimi}>Sorteeri eesnime esitähe järgi</button>
      <button onClick={sorteeriTahed}>Sorteeri tähtede arvu järgi</button>
      <button onClick={filtreeriVah10Tahte}>Filtreeri kellel on 10 või rohkem tähte</button>
      <div>Töötajad:</div>
      {tootajad.map((e, jrkNr) => <div>{e} <button onClick={() => kustuta(jrkNr)}>x</button> </div>)}
      {/* <div>Signe Riisalo</div>
      <div>Riina Sikkut</div>
      <div>Maarjo Mändmaa</div>
      <div>Ulla Saar</div>
      <div>Hanna Vseviov</div>
      <div>Heidi Alasepp</div>
      <div>Nele Labi</div> */}
    </div>
  )
}

export default Meist