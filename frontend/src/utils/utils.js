// :::::::::::::::::::::::::::: Settings Change :::::::::::::::::::::::::::::::::::::
export const changeHTMLTheme = (theme) => {
  switch (theme) {
    case "primary-light":
      document.body.className = "";
      break;
    case "primary-dark":
      document.body.className = "theme-primary-dark theme-dark";
      break;
    case "secondary-light":
      document.body.className = "theme-secondary-light";
      break;
    case "secondary-dark":
      document.body.className = "theme-secondary-dark theme-dark";
      break;
    case "reddishRose-light":
      document.body.className = "theme-reddishRose-light";
      break;
    case "reddishRose-dark":
      document.body.className = "theme-reddishRose-dark theme-dark";
      break;

    default:
      break;
  }
};

export const changeHTMLFs = (fontSize) => {
  // let fontSizeInPX = 10;
  switch (fontSize) {
    case "small":
      // fontSizeInPX = 8;
      document.documentElement.className = "small";
      break;
    case "normal":
      // fontSizeInPX = 10;
      document.documentElement.className = "";
      break;
    case "large":
      // fontSizeInPX = 12;
      document.documentElement.className = "large";
      break;

    default:
      break;
  }
  // document.documentElement.style.fontSize = fontSizeInPX + "px";
};
