import "./HangmanGame.css"
import { desableBtns, generaABC, inicio, intento, pista } from "../../utils/hangmanGameLogic"

const template = () => `
  <div class="main-container">
    <h1 class="titulo">Juego del ahorcado</h1>
    <h1 id="msg-final"></h1>
    <h3 id="acierto"></h3>
    <div class="no-wrap">
      <h2 class="palabra" id="palabra"></h2>
      <picture>
        <img src="src/pages/HangmanGame/img/ahorcado_6.png" alt="" id="image6">
        <img src="src/pages/HangmanGame/img/ahorcado_5.png" alt="" id="image5">
        <img src="src/pages/HangmanGame/img/ahorcado_4.png" alt="" id="image4">
        <img src="src/pages/HangmanGame/img/ahorcado_3.png" alt="" id="image3">
        <img src="src/pages/HangmanGame/img/ahorcado_2.png" alt="" id="image2">
        <img src="src/pages/HangmanGame/img/ahorcado_1.png" alt="" id="image1">
        <img src="src/pages/HangmanGame/img/ahorcado_0.png" alt="" id="image0">
      </picture>
    </div>
    <div class="flex-row" id="turnos">
      <div class="col">
        <h3>Intentos restantes: <span id="intentos">6</span></h3>
      </div>
      <div class="col">
        <button id="reset">Elegir otra palabra</button>
        <button id="pista">Dame una pista!</button>
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
  document.querySelector("#reset").addEventListener("click", inicio) // evento de funcion inicio en el boton reset

  document.querySelectorAll(".letra").forEach(item => //en cada boton de letra añadimos la funcion de intento
  {
    item.addEventListener("click", (e) => intento(e.target.id))
  })
  document.querySelector("#pista").addEventListener("click", pista) //evento funcion fista a boton pista
}

export const printHangmanGame = () => {
  document.querySelector("main").innerHTML = template()
  generaABC()
  desableBtns() // desabilita los botones cuando printa la pagina ya que solo los va  hablitar cuando pulsemos el boton de empezar
  addEvents() //añade eventos
}