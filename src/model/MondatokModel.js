import { szenvedoMondatok } from "./angol";
export default class MondatokModel {
  #mondatokLista = [];
  #cim = "";
  #hossz = 0;
  #sugo = "";
  #aktObj = {};
  #aktElem = 2;

  constructor() {
    this.#mondatokLista = szenvedoMondatok;
    this.#cim = this.#mondatokLista[0];
    this.#sugo = this.#mondatokLista[1];
    this.#hossz = this.#mondatokLista.length;
    this.mondatOsszeallit(this.#aktElem);
  }

  mondatOsszeallit(index) {
    let egeszObj = this.#mondatokLista[index];
    let egeszMondat = egeszObj.mondat.replace("_", egeszObj.valasztas[0]);
    let egeszM = egeszMondat.split(" ");
    this.#aktObj = {
      index: this.#aktElem,
      mondat: egeszObj.mondat,
      alap: egeszObj.alap,
      helyes: egeszObj.valasztas[0],
    };

    return this.#aktObj
  }

  kovElem(index){
    this.#aktElem++
    if (this.#aktElem>=this.#hossz) {
      this.#aktElem=2
    }
    return this.#aktElem
  }

  get cim(){
    return this.#mondatokLista[0]
  }

  get sugo(){
    return this.#mondatokLista[1]
  }

  get hossz(){
    return this.#mondatokLista.length-2
  }
}