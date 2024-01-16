import { useState } from "react";
import MondatokModel from "../model/MondatokModel";
import MondatKiegeszit from "./MondatKiegeszit";

export default function Kiegeszit() {
  const monModel = new MondatokModel();
  let cim = monModel.cim;
  let sugo = monModel.sugo;
  const [mondat, setMondat] = useState(monModel.mondatOsszeallit(2));

  function kovetkezo(index) {
    let i = monModel.kovElem(index)
    console.log(i)
    setMondat(monModel.mondatOsszeallit(i))
    console.log(monModel.mondatOsszeallit(i))
    
  }

  function sugoMegjelen() {
    console.log(sugo);
    return(
        <p>{sugo}</p>
    )
  }

  return (
    <article className="tartalom">
        <h3>
            {cim}
            <button className="sugo-btn btn btn-succes"
                onClick={sugoMegjelen}
            >
                ?
            </button>
        </h3>
        <h4>Írd be a helyes választ!</h4>
        <section className="mondat">
        <MondatKiegeszit mondatObj={mondat} kovetkezo={kovetkezo}/>
        </section>

    </article>

);
}
