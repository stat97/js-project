// route.js------> utils/route.js
import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard,HangmanGame} from "../pages";


export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      // ... Tu lógica para "Topo" aquí
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      // ... Tu lógica para "Memory" aquí
      break;
    case "HangmanGame":
      HangmanGame();
      break;
  }
};

