let rand = 0;
//Funcion de get y funcion de set para cambiar el valor de la varialbe
export const getRand = () => rand
export const setRand = () => rand = (Math.random() * 19).toFixed(0);

let palabra=""
export const getPalabra = () => palabra
export const setPalabra = (data) => palabra = data 

let oculta = []
export const getOculta = () => oculta
export const setOculta = (index, letter) => {
  oculta[index] = letter
};
export const resetOculta = () => oculta = []
 let cont =6 ;
 export const getCont = () => cont
 export const setCont = (data) => cont = data
