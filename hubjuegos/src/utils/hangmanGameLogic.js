import { letras, palabras } from "../global/data/HangmanGame.data";
import { getCont, getOculta, getPalabra, getRand, resetOculta, setCont, setOculta, setPalabra, setRand } from "../global/state/HangmanGame.state";
import { printHangmanGame } from "../pages/HangmanGame/HangmanGame";


export const desableBtns = () => {
  const buttons = document.getElementsByClassName('letra')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  //Desabilita todos los botones antes de pulsar el boton elegir otra palabra , cuando ganamos , perdedemos

  const btnPista = document.getElementById('pista')
  btnPista.disabled = true;
  // desabilitado , boton pista
}


const enableBtnsLetters = () => {
  const buttons = document.getElementsByClassName('letra')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  //Habilita los botones cuando pinchamos en el boton de elegir palabra

  const btnPista = document.getElementById('pista')
  btnPista.disabled = false;
  //habilita boton pista
}

const generaPalabra = () => {
  setRand() //llamamos al set que es el math random, state
  let rand = getRand() //conseguimos el valor de rand
  setPalabra(palabras[rand][0].toUpperCase()) //seteamos palabra de data palabra
}

const pintarGuiones = (num) => {
  for (var i = 0; i < num; i++) {
    setOculta(i,"_")
    console.log(getOculta())
  }
  //pintamos guiones y usamos set  de oculta que es una variable , cantidad de elementos que depende de la 
  const hueco = document.getElementById("palabra");
  hueco.innerHTML = getOculta().join(""); //saca los guiones de la variable oculta array y pinta en pantalla transforma en string
}

export const generaABC = () => {
  document.getElementById("abcdario").innerHTML = "";
  //for each del archivo data
  letras.forEach((item, i) => 
  {
    let letra = item.toUpperCase()
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' class='letra' id='" + letra + "'>" + letra + "</button>";
  })
  //pintamos botones en la pantalla con las letras
  }


const compruebaFin = () => {
  if (getOculta().indexOf("_") == -1)  // si todos los guones fueron sustituidos
  {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";

    desableBtns()

    document.getElementById("reset").innerHTML = "Empezar";

    const btnInicio = document.getElementById("reset")
    btnInicio.onclick = function () { printHangmanGame() }; //pinta la pagina otra vez
  } else if (getCont() == 0) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in"; //mensaje mas grande /pequeño

    desableBtns() //desabilitamos botones

    document.getElementById("reset").innerHTML = "Empezar";
    const btnInicio = document.getElementById("reset")
    btnInicio.onclick = function () { printHangmanGame() }; //pintamos pagina otra vez
  }
}

export const pista = () => {
  let rand = getRand() //geteamos de rand
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1]; //accediendo a data
}


export const intento = (letra) => {
  document.getElementById(letra).disabled = true; //cada vez que pinchamos la letra deshabilita elboton de la letra
  if (getPalabra().indexOf(letra) != -1) //si la letra existe en la palabra
  {
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
  } else //si la letra no existe
  {
    let cont = getCont()
    setCont(cont - 1) //disminuye el contador de intentos
    document.getElementById("intentos").innerHTML = getCont(); //usamos get , y lo pinta
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image" + getCont()).className += "fade-in"; 
  }
  compruebaFin(); // Llamo a la funcion
  setTimeout(function () {
    document.getElementById("acierto").className = "";
  }, 800);
}

export const inicio = () => {
  resetOculta() //array vacio en oculta
  setCont(6)  // setea el count en 6 intentos
  generaPalabra(); // genera nueva palabra
  enableBtnsLetters() // activa los botones de letras
  pintarGuiones(getPalabra().length); // pinta guiones
  document.getElementById("intentos").innerHTML = getCont() // pinta el contador
}