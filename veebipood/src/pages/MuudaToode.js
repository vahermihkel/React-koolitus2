import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const toode = tootedFailist[index];
  const nimiViide = useRef(); // reference

  const muuda = () => {
    tootedFailist[index] = nimiViide.current.value;
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiViide} type="text" defaultValue={toode} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode