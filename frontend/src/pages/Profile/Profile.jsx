import {useEffect, useRef, useState} from "react";
import {Chooser} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import {capitalizeFirstLetter} from "../../utils/formatter";
import "./Profile.css";
import useTranslation from "../../hooks/useTranslation";
import { SETTINGS } from "../../constants/constants";

const initialSettings = SETTINGS;

const Profile = () => {
  const formFsRef = useRef();
  const formLangRef = useRef();

  const {t} = useTranslation();
  const [settings, setSettings] = useLocalStorage(
    "settings",
    JSON.stringify(initialSettings)
  );
  const parsedSettings = settings ? JSON.parse(settings) : initialSettings;

  const [selectedFs, setSelectedFs] = useState(parsedSettings?.fontSize ?? initialSettings.fontSize);
  const [selectedLang, setSelectedLang] = useState(parsedSettings?.language ?? initialSettings.language);

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
        document.documentElement.className = "small"
        break;
      case "normal":
        // fontSizeInPX = 10;
        document.documentElement.className = ""
        break;
      case "large":
        // fontSizeInPX = 12;
        document.documentElement.className = "large"
        break;

      default:
        break;
    }
    // document.documentElement.style.fontSize = fontSizeInPX + "px";
  };

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
                  name="fontSize"
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
