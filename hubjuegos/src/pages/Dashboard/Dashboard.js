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
        <figure id ="navigateHangmanGame">
          <img src="src/pages/HangmanGame/img/ahorcado_0.png"
            alt="go to memory game"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {

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
  document.querySelector("nav").style.display = "flex";
  addEventListeners();
  getInfo();

};



