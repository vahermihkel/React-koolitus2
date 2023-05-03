import React, { useState } from "react";
import tootedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    uuendaTooted(tootedFailist.slice());
  };

  return (
    <div>
      {tooted.map((toode, index) => (
        <div>
          {toode} 
          <button onClick={() => kustuta(index)}>x</button>
          <Link to={"/muuda/" + index}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
