import { useRef, useState} from "react";
import {Chooser, InputTheme, InputThemeSelected} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import {capitalizeFirstLetter} from "../../utils/formatter";
import "./Profile.css";
import useTranslation from "../../hooks/useTranslation";
import {SETTINGS} from "../../constants/constants";
import {changeHTMLFs, changeHTMLTheme} from "../../utils/utils";

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
    changeHTMLTheme(selectedTheme);
  };

  const selectedThemeComponent = <InputThemeSelected selectedTheme={selectedTheme} />;

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
          selectedValue={selectedThemeComponent}
        >
          <form method="dialog" ref={formThemeRef}>
            <ul className="p-profile__section__fs-inp-wpr p-profile__section__fs-inp-wpr--direction-row">
              <li className="p-profile__section__fs-inp-item">
                <InputTheme
                  labelClasses={"label__theme-radio-inp"}
                  inpId={"theme-primary-light"}
                  inpClasses={"input-theme-radio-inp"}
                  inpValue={t("profile.menus.theme.options.primaryLight.value")}
                  onThemeChange={handleThemeChange}
                  selectedTheme={selectedTheme}
                />
              </li>
              <li className="p-profile__section__fs-inp-item">
                <InputTheme
                  labelClasses={"label__theme-radio-inp"}
                  inpId={"theme-primary-dark"}
                  inpClasses={"input-theme-radio-inp"}
                  inpValue={t("profile.menus.theme.options.primaryDark.value")}
                  onThemeChange={handleThemeChange}
                  selectedTheme={selectedTheme}
                />
              </li>
              <li className="p-profile__section__fs-inp-item">
                <InputTheme
                  labelClasses={"label__theme-radio-inp"}
                  inpId={"theme-secondary-light"}
                  inpClasses={"input-theme-radio-inp"}
                  inpValue={t("profile.menus.theme.options.secondaryLight.value")}
                  onThemeChange={handleThemeChange}
                  selectedTheme={selectedTheme}
                />
              </li>
              <li className="p-profile__section__fs-inp-item">
                <InputTheme
                  labelClasses={"label__theme-radio-inp"}
                  inpId={"theme-secondary-dark"}
                  inpClasses={"input-theme-radio-inp"}
                  inpValue={t("profile.menus.theme.options.secondaryDark.value")}
                  onThemeChange={handleThemeChange}
                  selectedTheme={selectedTheme}
                />
              </li>
              <li className="p-profile__section__fs-inp-item">
                <InputTheme
                  labelClasses={"label__theme-radio-inp"}
                  inpId={"theme-reddishRose-light"}
                  inpClasses={"input-theme-radio-inp"}
                  inpValue={t("profile.menus.theme.options.reddishRoseLight.value")}
                  onThemeChange={handleThemeChange}
                  selectedTheme={selectedTheme}
                />
              </li>
              <li className="p-profile__section__fs-inp-item">
                <InputTheme
                  labelClasses={"label__theme-radio-inp"}
                  inpId={"theme-reddishRose-dark"}
                  inpClasses={"input-theme-radio-inp"}
                  inpValue={t("profile.menus.theme.options.reddishRoseDark.value")}
                  onThemeChange={handleThemeChange}
                  selectedTheme={selectedTheme}
                />
              </li>
            </ul>
          </form>
        </Chooser>
      </section>
    </div>
  );
};

export default Profile;

const iconFontSize = (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon__fill-fc-primary"
  >
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
    stroke="red"
    strokeWidth="1.512"
    strokeLinecap="square"
    strokeLinejoin="miter"
    fill="none"
    color="red"
    className="icon__stroke-fc-primary"
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
    className="icon__fill-fc-primary"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g data-name="Layer 2">
        {" "}
        <g data-name="color-palette">
          {" "}
          <rect width="24" height="24" opacity="0"></rect>{" "}
          <path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 0 0-1.87 4.15.49.49 0 0 1 .12.49c-.05.21-.28.34-.59.36a8 8 0 0 1-7.82-9.11A8.1 8.1 0 0 1 11.92 4H12a8.47 8.47 0 0 1 6.1 2.48 6.5 6.5 0 0 1 1.9 4.77A4.17 4.17 0 0 1 15.88 15z"></path>{" "}
          <circle cx="12" cy="6.5" r="1.5"></circle>{" "}
          <path d="M15.25 7.2a1.5 1.5 0 1 0 2.05.55 1.5 1.5 0 0 0-2.05-.55z"></path>{" "}
          <path d="M8.75 7.2a1.5 1.5 0 1 0 .55 2.05 1.5 1.5 0 0 0-.55-2.05z"></path>{" "}
          <path d="M6.16 11.26a1.5 1.5 0 1 0 2.08.4 1.49 1.49 0 0 0-2.08-.4z"></path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);
