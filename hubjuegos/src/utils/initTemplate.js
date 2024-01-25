
  // initTemplate.js -----> dentro de utils
import { PrintTemplateHeader, PrintTemplateFooter } from "../components";

export const initTemplate = () => {
  const app = document.getElementById("app");

  //? -------> vamos a crear los elementos
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  //? -------> inyectamos os elementos en el contenedor de la app

  app.append(header, main, footer);

  PrintTemplateHeader();
  PrintTemplateFooter();
};