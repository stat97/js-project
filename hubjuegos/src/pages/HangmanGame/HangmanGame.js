import "./HangmanGame.css"
import { generaABC, inicio, intento } from "../../utils/hangmanGameLogic"

const template = () => `
  <div class="main-container">
    <h1 class="titulo">Juego del ahorcado</h1>
    <h1 id="msg-final"></h1>
    <h3 id="acierto"></h3>
    <div class="flex-row no-wrap">
      <h2 class="palabra" id="palabra"></h2>
      <picture>
        <img src="img/ahorcado_6.png" alt="" id="image6">
        <img src="img/ahorcado_5.png" alt="" id="image5">
        <img src="img/ahorcado_4.png" alt="" id="image4">
        <img src="img/ahorcado_3.png" alt="" id="image3">
        <img src="img/ahorcado_2.png" alt="" id="image2">
        <img src="img/ahorcado_1.png" alt="" id="image1">
        <img src="img/ahorcado_0.png" alt="" id="image0">
      </picture>
    </div>
    <div class="flex-row" id="turnos">
      <div class="col">
        <h3>Intentos restantes: <span id="intentos">6</span></h3>
      </div>
      <div class="col">
        <button id="reset">Elegir otra palabra</button>
        <button onclick="pista()" id="pista">Dame una pista!</button>
        <span id="hueco-pista"></span>
      </div>
    </div>
    <div class="flex-row">
      <div class="col">
        <div class="flex-row" id="abcdario">
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
`
const addEvents = () => {
  document.querySelector("#reset").addEventListener("click", inicio)

  document.querySelectorAll(".letra").forEach(item => {
    item.addEventListener("click", (e) => intento(e.target.id))
  })
}

export const printHangmanGame = () => {
  document.querySelector("main").innerHTML = template()
  generaABC("a", "z")
  addEvents()
}