import React from 'react'
import { useState } from 'react'

function Seaded() {
  const [keel, uuendaKeel] = useState("est");

  return (
    <div>
      <button onClick={() => uuendaKeel("est")}>Eesti keelseks</button>
      <button onClick={() => uuendaKeel("eng")}>To English</button>
      <button onClick={() => uuendaKeel("rus")}>Pycckij rsõk</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Pycckij rsõk sdes</div>}
    </div>
  )
}

export default Seaded