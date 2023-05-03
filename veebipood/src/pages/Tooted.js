import React, { useState } from "react";
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from "react-router-dom";

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (element) => {
    ostukorvFailist.push(element);
  };

  return (
    <div>
      {tooted.map((element, index) => (
        <div>
          <Link to={"/toode/" + index}>
            {element}
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>
      ))}
    </div>
  );
}

export default Tooted;
