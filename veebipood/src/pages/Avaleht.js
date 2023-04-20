import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(12);
  const [laigitud, uuendaLaigitud] = useState(false); // 0
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <span>{laigitud + 0}</span>
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>

      <br /><br />

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button onClick={vahenda}>-</button>
      <span>kogus: {kogus} tükki</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht