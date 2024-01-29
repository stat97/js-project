import { palabras } from "../global/data/HangmanGame.data";
import { getCont, getOculta, getPalabra, getRand, setCont, setOculta, setPalabra, setRand } from "../global/state/HangmanGame.state";
import { printHangmanGame } from "../pages/HangmanGame/HangmanGame";


export const desableBtns = () => {
  const buttons = document.getElementsByClassName('letra')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  const btnPista = document.getElementById('pista')
  btnPista.disabled = true;
}

const enableBtnsLetters = () => {
  const buttons = document.getElementsByClassName('letra')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  const btnPista = document.getElementById('pista')
  btnPista.disabled = false;
}

const generaPalabra = () => {
  setRand()
  let rand = getRand()
  setPalabra(palabras[rand][0].toUpperCase())
}

const pintarGuiones = (num) => {
  for (var i = 0; i < num; i++) {
    setOculta(i)
  }
  const hueco = document.getElementById("palabra");
  hueco.innerHTML = getOculta().join("");
}

export const generaABC = (a, z) => {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0)
  var j = z.charCodeAt(0);
  var letra = "";
  for (; i <= j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' class='letra' id='" + letra + "'>" + letra + "</button>";
    if (i == 110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' class='letra' id='" + letra + "'>Ñ</button>";
    }
  }
}

const compruebaFin = () => {
  if (getOculta().indexOf("_") == -1) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";

    desableBtns()

    document.getElementById("reset").innerHTML = "Empezar";

    const btnInicio = document.getElementById("reset")
    btnInicio.onclick = function () { printHangmanGame() };
  } else if (getCont() == 0) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";

    desableBtns()

    document.getElementById("reset").innerHTML = "Empezar";
    const btnInicio = document.getElementById("reset")
    btnInicio.onclick = function () { printHangmanGame() };
  }
}

export const pista = () => {
  let rand = getRand()
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}


export const intento = (letra) => {
  document.getElementById(letra).disabled = true;
  if (getPalabra().indexOf(letra) != -1) {
    for (var i = 0; i < getPalabra().length; i++) {
      if (getPalabra()[i] == letra) {
        let oculta = getOculta()
        oculta[i] = letra
        setOculta(oculta)
      }
    }
    const hueco = document.getElementById("palabra");
    hueco.innerHTML = getOculta().join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  } else {
    let cont = getCont()
    setCont(cont - 1)
    document.getElementById("intentos").innerHTML = getCont();
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image" + getCont()).className += "fade-in";
  }
  compruebaFin();
  setTimeout(function () {
    document.getElementById("acierto").className = "";
  }, 800);
}

export const inicio = () => {
  generaPalabra();
  enableBtnsLetters()
  pintarGuiones(getPalabra().length);
  document.getElementById("intentos").innerHTML = getCont()
}