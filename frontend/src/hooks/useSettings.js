import {SETTINGS} from "../constants/constants";
import { changeHTMLFs, changeHTMLTheme } from "../utils/utils";
import {useLocalStorage} from "./useStorage";

const useSettings = () => {
  const [settings] = useLocalStorage(
    "settings",
    JSON.stringify(SETTINGS)
  );

  const parsedSettings = settings ? JSON.parse(settings) : SETTINGS;
  
  // const changeHTMLFs = (fontSize) => {
  //   // let fontSizeInPX = 10;
  //   switch (fontSize) {
  //     case "small":
  //       // fontSizeInPX = 8;
  //       document.documentElement.className = "small";
  //       break;
  //     case "normal":
  //       // fontSizeInPX = 10;
  //       document.documentElement.className = "";
  //       break;
  //     case "large":
  //       // fontSizeInPX = 12;
  //       document.documentElement.className = "large";
  //       break;

  //     default:
  //       break;
  //   }
  //   // document.documentElement.style.fontSize = fontSizeInPX + "px";
  // };

  // const changeHTMLTheme = (theme) => {
  //   switch (theme) {
  //     case "primary-light":
  //       document.body.className = ""
  //       break;
  //     case "primary-dark":
  //       document.body.className = "theme-primary-dark"
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

  changeHTMLFs(parsedSettings.fontSize)
  changeHTMLTheme(parsedSettings.theme)
  
  return "updated"
};

export default useSettings;
