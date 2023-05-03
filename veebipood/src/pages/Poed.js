import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);
  const [kogusumma, uuendaKogusumma] = useState(0);

  const arvutaKoguTahtedeArv = () => {
    let summa = 0;
    poed.forEach(yksPood => summa = summa + yksPood.length);
    uuendaKogusumma(summa);
  }

  const reset = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriEsitaht = () => {
    poed.sort((a,b) => a.localeCompare(b));
    uuendaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a));
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.length - b.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.length - a.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {
    poed.sort((a,b) => a[2].localeCompare(b[2]));
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
    uuendaPoed(vastus);
  }

  const filtreeriVahemalt7Tahte = () => {
    const vastus = poed.filter(yksPood => yksPood.length >= 7);
    uuendaPoed(vastus);
  }

  const filtreeriKellel9Tahte = () => {
    const vastus = poed.filter(yksPood => yksPood.length === 9);
    uuendaPoed(vastus);
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poed.filter(yksPood => yksPood.includes("is"));
    uuendaPoed(vastus);
  }

  const filtreeriKellelKolmasTahtI = () => {
    const vastus = poed.filter(yksPood => yksPood[2] === "i"); // esimest täht:  yksPood[0]   teine: yksPood[1]
    uuendaPoed(vastus);
  }

  const kustuta = (i) => {
    poed.splice(i,1);
    uuendaPoed(poed.slice());
  }


  return (
    <div>
      <button onClick={reset}>Reset filters</button>
      <div>{kogusumma}</div>
      <button onClick={arvutaKoguTahtedeArv}>Arvuta tähtede arv</button>
      <br /><br />
      <button onClick={sorteeriEsitaht}>Sorteeri esitähe järgi</button>
      <button onClick={sorteeriZA}>Sorteeri esitähe järgi tagurpidi</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arvu järgi kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arvu järgi kahanevalt</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Jäta alles tähega 'e' lõppevad</button>
      <button onClick={filtreeriVahemalt7Tahte}>Jäta alles kellel on 7 või rohkem tähte</button>
      <button onClick={filtreeriKellel9Tahte}>Jäta alles kellel on 9 tähte</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>Jäta alles kes sisaldab 'is' lühendit</button>
      <button onClick={filtreeriKellelKolmasTahtI}>Jäta alles kellel kolmas täht on 'i'</button>
      {poed.map((yksPood, i) => <div>{yksPood} <button onClick={() => kustuta(i)}>Kustuta</button> </div>)}
      {/* <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div> */}
    </div>
  )
}

export default Poed