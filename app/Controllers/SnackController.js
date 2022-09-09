import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";


function _draw() {
  let template = ''
  appState.snacks.forEach(s => {
    template +=
      setHTML('snacks', /*html*/`
    <div class="my-3">
      <button class="btn btn-primary text-white elevation-2" onclick="app.valuesController.addValue()">${s.name}</button>  
      <button class="btn btn-warning text-white elevation-2" onclick="app.valuesController.clearAll()">${s.price}</button>  
      <div class="values d-flex flex-wrap my-3">
        ${cardsTemplate}
      </div>
    </div>
    `)
  })
}

//Public
export class ValuesController {
  constructor() {
    appState.on("values", _draw);
    _draw()
  }
}