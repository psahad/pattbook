import {useEffect, useRef, useState} from "react";
import {Chooser} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import {capitalizeFirstLetter} from "../../utils/formatter";
import "./Profile.css";
import useTranslation from "../../hooks/useTranslation";
import {SETTINGS} from "../../constants/constants";

const initialSettings = SETTINGS;

const Profile = () => {
  const formFsRef = useRef();
  const formLangRef = useRef();
  const formThemeRef = useRef();

  const {t} = useTranslation();
  const [settings, setSettings] = useLocalStorage(
    "settings",
    JSON.stringify(initialSettings)
  );
  const parsedSettings = settings ? JSON.parse(settings) : initialSettings;

  const [selectedFs, setSelectedFs] = useState(
    parsedSettings?.fontSize ?? initialSettings.fontSize
  );
  const [selectedLang, setSelectedLang] = useState(
    parsedSettings?.language ?? initialSettings.language
  );
  const [selectedTheme, setSelectedTheme] = useState(
    parsedSettings?.theme ?? initialSettings.theme
  );

  // for font size
  const handleFsChange = (event) => {
    setSelectedFs(event.target.value);
  };

  const handleFsFormReset = () => {
    setSelectedFs(parsedSettings.fontSize);
  };

  const onClickSaveFs = () => {
    setSettings(JSON.stringify({...parsedSettings, fontSize: selectedFs}));
    formFsRef.current.submit();
    changeHTMLFs(selectedFs);
  };

  // for language
  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
  };

  const handleLangFormReset = () => {
    setSelectedLang(parsedSettings.language);
  };

  const onClickSaveLang = () => {
    setSettings(JSON.stringify({...parsedSettings, language: selectedLang}));
    formLangRef.current.submit();
    window.location.reload();
  };

  // for theme
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleThemeFormReset = () => {
    setSelectedTheme(parsedSettings.theme);
  };

  const onClickSaveTheme = () => {
    setSettings(JSON.stringify({...parsedSettings, theme: selectedTheme}));
    formThemeRef.current.submit();
    changeHTMLTheme(selectedTheme)
    // window.location.reload();
  };

  // const handleThemeChange = () => {
  //   document.body.classList.toggle("theme-dark-green");
  // };
  // const style = {
  //   padding: "1rem",
  //   margin: "3rem",
  // };

  const changeHTMLFs = (fontSize) => {
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

  const changeHTMLTheme = (theme) => {
    switch (theme) {
      case "bluish-light":
        document.body.className = ""
        break;
      case "bluish-dark":
        document.body.className = "theme-bluish-dark"
        break;
    
      default:
        break;
    }
  }
  

  useEffect(() => {
    console.log(selectedLang);
  }, [selectedLang]);

  return (
    <div className="page p-profile">
      <section className="p-profile__section p-profile__section-profile">
        <h1 className="p-profile__profile-name">Sahad P</h1>
      </section>
      <section className="p-profile__section p-profile__section-settings">
        <Chooser
          icon={iconFontSize}
          chooserName={t("profile.menus.fontSize.label")}
          modalTitle={t("profile.menus.fontSize.modal.title")}
          btnPrimary={t("profile.menus.fontSize.modal.btnPrimary")}
          btnSecondary={t("profile.menus.fontSize.modal.btnSecondary")}
          onClickBtnPrimary={onClickSaveFs}
          onClickBtnSecondary={handleFsFormReset}
          selectedValue={capitalizeFirstLetter(parsedSettings.fontSize)}
        >
          <form method="dialog" ref={formFsRef}>
            <ul className="p-profile__section__fs-inp-wpr">
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="fontSize"
                  id="fs-small"
                  value={"small"}
                  onChange={handleFsChange}
                  checked={selectedFs === "small"}
                />
                <label className="label-radio" htmlFor="fs-small">
                  {t("profile.menus.fontSize.options.small")}
                </label>
              </li>
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="fontSize"
                  id="fs-normal"
                  value={"normal"}
                  onChange={handleFsChange}
                  checked={selectedFs === "normal"}
                />
                <label className="label-radio" htmlFor="fs-normal">
                  {t("profile.menus.fontSize.options.normal")}
                </label>
              </li>
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="fontSize"
                  id="fs-large"
                  value={"large"}
                  onChange={handleFsChange}
                  checked={selectedFs === "large"}
                />
                <label className="label-radio" htmlFor="fs-large">
                  {t("profile.menus.fontSize.options.large")}
                </label>
              </li>
            </ul>
          </form>
        </Chooser>
        <Chooser
          icon={iconLanguage}
          chooserName={t("profile.menus.language.label")}
          modalTitle={t("profile.menus.language.modal.title")}
          btnPrimary={t("profile.menus.language.modal.btnPrimary")}
          btnSecondary={t("profile.menus.language.modal.btnSecondary")}
          onClickBtnPrimary={onClickSaveLang}
          onClickBtnSecondary={handleLangFormReset}
          selectedValue={capitalizeFirstLetter(parsedSettings.language)}
        >
          <form method="dialog" ref={formLangRef}>
            <ul className="p-profile__section__fs-inp-wpr">
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="fontSize"
                  id="lang-en"
                  value={t("profile.menus.language.options.english.value")}
                  onChange={handleLangChange}
                  checked={
                    selectedLang ===
                    t("profile.menus.language.options.english.value")
                  }
                />
                <label className="label-radio" htmlFor="lang-en">
                  {t("profile.menus.language.options.english.label")}
                </label>
              </li>
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="language"
                  id="lang-ml"
                  value={t("profile.menus.language.options.malayalam.value")}
                  onChange={handleLangChange}
                  checked={
                    selectedLang ===
                    t("profile.menus.language.options.malayalam.value")
                  }
                />
                <label className="label-radio" htmlFor="lang-ml">
                  {t("profile.menus.language.options.malayalam.label")}
                </label>
              </li>
            </ul>
          </form>
        </Chooser>
        <Chooser
          icon={iconTheme}
          chooserName={t("profile.menus.theme.label")}
          modalTitle={t("profile.menus.theme.modal.title")}
          btnPrimary={t("profile.menus.theme.modal.btnPrimary")}
          btnSecondary={t("profile.menus.theme.modal.btnSecondary")}
          onClickBtnPrimary={onClickSaveTheme}
          onClickBtnSecondary={handleThemeFormReset}
          selectedValue={capitalizeFirstLetter(parsedSettings.theme)}
        >
          <form method="dialog" ref={formThemeRef}>
            <ul className="p-profile__section__fs-inp-wpr">
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="fontSize"
                  id="theme-bluish-light"
                  value={t("profile.menus.theme.options.bluishLight.value")}
                  onChange={handleThemeChange}
                  checked={
                    selectedTheme ===
                    t("profile.menus.theme.options.bluishLight.value")
                  }
                />
                <label className="label-radio" htmlFor="theme-bluish-light">
                  {t("profile.menus.theme.options.bluishLight.label")}
                </label>
              </li>
              <li className="p-profile__section__fs-inp-item">
                <input
                  type="radio"
                  className="inp-radio"
                  name="theme"
                  id="theme-bluish-dark"
                  value={t("profile.menus.theme.options.bluishDark.value")}
                  onChange={handleThemeChange}
                  checked={
                    selectedTheme ===
                    t("profile.menus.theme.options.bluishDark.value")
                  }
                />
                <label className="label-radio" htmlFor="theme-bluish-dark">
                  {t("profile.menus.theme.options.bluishDark.label")}
                </label>
              </li>
            </ul>
          </form>
        </Chooser>
      </section>
      {/* <button style={style} onClick={handleThemeChange}>
        Theme Change
      </button> */}
    </div>
  );
};

export default Profile;

const iconFontSize = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path fill="none" d="M0 0h24v24H0z"></path>{" "}
        <path d="M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

const iconLanguage = (
  <svg
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="languageIconTitle"
    stroke="#000000"
    strokeWidth="1.512"
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    color="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title id="languageIconTitle">Language</title>{" "}
      <circle cx="12" cy="12" r="10"></circle>{" "}
      <path
        strokeLinecap="round"
        d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
      ></path>{" "}
      <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path>{" "}
    </g>
  </svg>
);

const iconTheme = (
  <svg
    fill="#000000"
    height="24px"
    width="24px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    stroke="#000000"
    stroke-width="6.656000000000001"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M475.691,0.021c-14.656,0-27.776,8.725-33.451,22.251l-32.64,77.973c-9.728-9.152-22.421-14.933-36.267-14.933h-320 C23.936,85.312,0,109.248,0,138.645v320c0,29.397,23.936,53.333,53.333,53.333h320c29.397,0,53.333-23.936,53.333-53.333V225.152 l81.92-172.821c2.24-4.757,3.413-10.048,3.413-16.043C512,16.299,495.701,0.021,475.691,0.021z M405.333,458.645 c0,17.643-14.357,32-32,32h-320c-17.643,0-32-14.357-32-32v-320c0-17.643,14.357-32,32-32h320 c11.243,0,21.312,6.101,27.072,15.573l-37.739,90.197v-52.437c0-5.888-4.779-10.667-10.667-10.667H74.667 c-5.888,0-10.667,4.779-10.667,10.667v85.333c0,5.888,4.779,10.667,10.667,10.667h269.76l-8.939,21.333h-90.155 c-5.888,0-10.667,4.779-10.667,10.667v128c0,0.277,0.128,0.512,0.149,0.789c-8.768,7.787-14.144,10.389-14.528,10.539 c-3.371,1.259-5.888,4.096-6.699,7.616c-0.811,3.584,0.256,7.339,2.859,9.941c15.445,15.445,36.757,21.333,57.6,21.333 c26.645,0,52.48-9.643,64.128-21.333c16.768-16.768,29.056-50.005,19.776-74.773l47.381-99.925V458.645z M270.635,397.525 c2.944-9.685,5.739-18.859,14.229-27.349c15.083-15.083,33.835-15.083,48.917,0c13.504,13.504,3.2,45.717-10.667,59.584 c-11.563,11.541-52.672,22.677-80.256,8.256c3.669-2.859,7.893-6.549,12.672-11.328 C264.448,417.749,267.605,407.467,270.635,397.525z M256,375.339v-76.672h70.571l-16.363,39.083 c-14.251-0.256-28.565,5.483-40.448,17.387C263.125,361.771,259.008,368.661,256,375.339z M331.264,342.741l28.715-68.629 l16.128,7.915l-32.555,68.651C339.605,347.477,335.531,344.747,331.264,342.741z M341.333,170.645v64h-256v-64H341.333z M489.28,43.243l-104.064,219.52l-17.003-8.341l54.08-129.237l39.616-94.677c2.325-5.568,7.744-9.152,13.803-9.152 c8.235,0,14.933,6.699,14.933,15.659C490.645,39.147,490.176,41.344,489.28,43.243z"></path>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M181.333,277.312H74.667c-5.888,0-10.667,4.779-10.667,10.667v149.333c0,5.888,4.779,10.667,10.667,10.667h106.667 c5.888,0,10.667-4.779,10.667-10.667V287.979C192,282.091,187.221,277.312,181.333,277.312z M170.667,426.645H85.333v-128h85.333 V426.645z"></path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);
