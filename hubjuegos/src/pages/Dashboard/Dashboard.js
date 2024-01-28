
// src/pages/Dashboard/Dashboard.js
import { getInfo, initControler } from "../../utils";


import "./Dashboard.css";


const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li id ="navigateHangmanGame">
        <div>
          <div class="game-icon">
            <img id ="hang" src="src/icons/interrogante.png" alt="Icono del juego de adivinanzas">
          </div>
          
        </div>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateHangmanGame = document.getElementById("navigateHangmanGame");

  navigateHangmanGame.addEventListener("click", () => {
    
    initControler("HangmanGame");
     console.log("click")
    
  });
};

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();

  /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
   */
//--------------------------------------------- LO NUEVO -------------------------
  getInfo();
//---------------------------------------------------------------------------------
};



