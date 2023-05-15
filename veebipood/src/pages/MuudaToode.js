import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const toode = tootedFailist[index];
  const nimiViide = useRef(); // reference
  const hindViide = useRef();
  const aktiivneViide = useRef();
  const piltViide = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    tootedFailist[index] = {
      "nimi": nimiViide.current.value, 
      "hind": Number(hindViide.current.value), 
      "aktiivne": aktiivneViide.current.checked, 
      "pilt": piltViide.current.value
    };
    navigate("/halda");
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiViide} type="text" defaultValue={toode.nimi} /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindViide} type="number" defaultValue={toode.hind} /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" defaultChecked={toode.aktiivne} /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltViide} type="text" defaultValue={toode.pilt} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode