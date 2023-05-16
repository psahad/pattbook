import React from "react";
import "./InputTheme.css";

const InputTheme = ({
  labelClasses,
  inpId,
  inpClasses,
  inpValue,
  onThemeChange,
  selectedTheme,
}) => {
  return (
    <label htmlFor={inpId} className={labelClasses}>
      <input
        type="radio"
        name="theme"
        id={inpId}
        className={inpClasses}
        value={inpValue}
        onChange={onThemeChange}
        checked={selectedTheme === inpValue}
      />
      <div className="theme__radio-wpr">
        <span className={`theme__radio theme__radio--${inpValue}`}></span>
        <span className={`theme__radio theme__radio--${inpValue}`}></span>
      </div>
    </label>
  );
};

export default InputTheme;

export const InputThemeSelected = ({selectedTheme}) => {
  return (
    <div className="theme__radio-wpr theme__radio-wpr--sm">
      <span className={`theme__radio theme__radio--${selectedTheme}`}></span>
      <span className={`theme__radio theme__radio--${selectedTheme}`}></span>
    </div>
  );
}

