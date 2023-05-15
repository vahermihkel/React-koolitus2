import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";

function YksikToode() {
  const { index } = useParams(); // URLst andmete võtmiseks
  const toode = tootedFailist[index];

  const lisaOstukorvi = () => {
    ostukorvFailist.push(toode);
  }

  return (
    <div>
      <img className="pilt" src={toode.pilt} alt="" />
      <div>Toote nimi: {toode.nimi}</div>
      <div>Toote hind: {toode.hind}</div>
      <div>Toote järjekorranumber: {index}</div>
      <div>Toote kirjeldus: ....</div>
      <button onClick={lisaOstukorvi}>Lisa ostukorvi</button>
    </div>
  )
}

export default YksikToode