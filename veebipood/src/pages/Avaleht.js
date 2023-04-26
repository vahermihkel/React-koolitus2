import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(8);
  const [laigitud, uuendaLaigitud] = useState(false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  function nulli() {
    uuendaSonum("Panid tagasi nulli!");
    uuendaKogus(0);
  }

  function vahenda() {
    uuendaSonum("Vähendasid!");
    uuendaKogus(kogus - 1);
  }

  function suurenda() {
    uuendaSonum("Suurendasid!");
    uuendaKogus(kogus + 1);
  }

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {/* <span>{laigitud}</span> */}
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>

      <br /><br />
      <div>{sonum}</div>
      { kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      {/* <button onClick={() => uuendaKogus(0)}>Tagasi nulli</button> */}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>Kogus on: {kogus} tk</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht