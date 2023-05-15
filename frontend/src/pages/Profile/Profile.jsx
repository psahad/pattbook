import { useRef } from "react";
import {Chooser} from "../../components";
import "./Profile.css";
import { useLocalStorage } from "../../hooks/useStorage";
import { capitalizeFirstLetter } from "../../utils/formatter";

const Profile = () => {
  const formFsRef = useRef();


  const initialSettings = {
    fontSize: "normal",
    theme: "primaryLight"
  }
  const [settings, setSettings] = useLocalStorage("settings", JSON.stringify(initialSettings))
  const parsedSettings = settings ? JSON.parse(settings) : initialSettings
  
  const handleThemeChange = () => {
    document.body.classList.toggle("theme-dark-green");
  };

  const style = {
    padding: "1rem",
    margin: "3rem",
  };

  const onClickSaveFs= () => {
    setSettings(JSON.stringify({...parsedSettings, fontSize: formFsRef.current.fontSize.value}))
    formFsRef.current.submit();
    changeHTMLFs(formFsRef.current.fontSize.value)
  }

  const handleFsForm = (e) => {
    console.log("submited");
    e.preventDefault();
  }

  const changeHTMLFs = (fontSize) => {
    let fontSizeInPX = 10;
    console.log("fontSize", fontSize);
    switch (fontSize) {
      case "small":
         fontSizeInPX = 8;
        break;
      case "normal":
         fontSizeInPX = 10;
        break;
      case "large":
         fontSizeInPX = 12;
        break;

      default:
        break;
    }
    document.documentElement.style.fontSize = fontSizeInPX + "px";
  }
  
  return (
    <div className="page p-profile">
      <section className="p-profile__section p-profile__section-profile">
        <h1 className="p-profile__profile-name">Sahad P</h1>
      </section>
      <section className="p-profile__section p-profile__section-settings">
        <Chooser
          icon={iconFontSize}
          chooserName={"Font Size"}
          modalTitle={"Choose a font Size"}
          onClickBtnPrimary={onClickSaveFs}
          selectedValue={capitalizeFirstLetter(parsedSettings.fontSize)}
        >
          <form method="dialog" ref={formFsRef} onSubmit={handleFsForm}>
            <ul className="p-profile__section__fs-inp-wpr">
              <li className="p-profile__section__fs-inp-item">
                <input type="radio" className="inp-radio" name="fontSize" id="fs-small" value={"small"}  defaultChecked={parsedSettings.fontSize === 'small'} />
                <label className="label-radio" htmlFor="fs-small">{"Small"}</label>
              </li>
              <li className="p-profile__section__fs-inp-item">
                <input type="radio" className="inp-radio" name="fontSize" id="fs-normal" value={"normal"} defaultChecked={parsedSettings.fontSize === 'normal'}/>
                <label className="label-radio" htmlFor="fs-normal">{"Normal"}</label>
              </li>
              <li className="p-profile__section__fs-inp-item">
                <input type="radio" className="inp-radio" name="fontSize" id="fs-large" value={"large"} defaultChecked={parsedSettings.fontSize === 'large'}/>
                <label className="label-radio" htmlFor="fs-large">{"Large"}</label>
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
