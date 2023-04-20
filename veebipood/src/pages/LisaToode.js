import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef(); // ref -- loeb inputi seest väärtusi
  // const nimiRef = useRef();
  // const nimiViide = useRef();

  // function lisa() {}

  const lisa = () => {
    uuendaSonum("Toode lisatud, nimega: " + inputiLuger.current.value);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode