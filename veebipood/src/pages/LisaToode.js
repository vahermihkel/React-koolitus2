import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();

  // function lisa() {}    täpselt sama mis alumine

  const lisa = () => {
    // { tõene && <div>}
    // <button disabled={tõene}>
    // if(tõene) {SIIA BLOKKI} else {KUI ON MITTETÕENE}
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Lisa toode</button> <br />
    </div>
  )
}

export default LisaToode