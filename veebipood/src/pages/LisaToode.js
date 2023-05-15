import React, { useRef, useState } from 'react';
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();
  const hinnaViide = useRef(); // reference
  const aktiivneViide = useRef();
  const piltViide = useRef();

  // function lisa() {}    täpselt sama mis alumine

  const lisa = () => {
    // { tõene && <div>}
    // <button disabled={tõene}>
    // if(tõene) {SIIA BLOKKI} else {KUI ON MITTETÕENE}
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
      const uustoode = {
        "nimi": inputiLuger.current.value, 
        "hind": Number(hinnaViide.current.value), 
        "aktiivne": aktiivneViide.current.checked,
        "pilt": piltViide.current.value
      }
      tootedFailist.push(uustoode); // lisab alati lõppu ühe juurde
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hinnaViide} type="number" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltViide} type="text" /> <br />
      <button onClick={lisa}>Lisa toode</button> <br />
    </div>
  )
}

export default LisaToode