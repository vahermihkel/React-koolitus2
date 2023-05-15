import React, { useState } from "react";
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from "react-router-dom";

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (element) => {
    ostukorvFailist.push(element);
  };

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriPildiUrlAZ = () => {
    tooted.sort((a,b) => a.pilt.localeCompare(b.pilt));
    uuendaTooted(tooted.slice());
  }

  const sorteeriNimePikkuseAlusel = () => {
    tooted.sort((a,b) => a.nimi.length - b.nimi.length);
    uuendaTooted(tooted.slice());
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
      <button onClick={sorteeriPildiUrlAZ}>Sorteeri pildi URL A-Z</button>
      <button onClick={sorteeriNimePikkuseAlusel}>Sorteeri toote nime pikkuse alusel</button>
      {tooted.map((element, index) => (
        <div>
          <Link to={"/toode/" + index}>
            <img className="pilt" src={element.pilt} alt="" />
            <div>{element.nimi}</div>
            <div>{element.hind}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>
      ))}
    </div>
  );
}

export default Tooted;
