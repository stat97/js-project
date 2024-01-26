// route.js ---> utils/route.js
import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";

export const initControler = (pagesRender) => {
 
  switch (pagesRender) {

	/////// -------OPERA ESTE CASO--- SI NO HAY USER EN EL CONTEXTO PINTA EL LOGIN
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;

	////// ------------------------------------------------------------------------
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      "Topo()";
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "Memory()";
      break;
  }
};