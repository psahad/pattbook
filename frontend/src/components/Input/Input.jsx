import React, {useEffect, useRef, useState} from "react";
import "./Input.css";
import {mandatoryValidate} from "../../utils/validations";
import useTranslation from "../../hooks/useTranslation";

const Input = ({
  label,
  placeholder,
  type,
  onChange,
  formControlClasses,
  labelClasses,
  inputClasses,
  inpName,
  inpId,
  isRequired = true,
  maxLength,
  minLength,
}) => {
  const initialValidation = {
    isValid: true,
    msg: "",
  };
  const [isActive, setIsActive] = useState(false);
  const [validation, setValidation] = useState(initialValidation);
  const {t} = useTranslation();
  const inputRef = useRef();

  const handleFocus = () => {
    const inpValue = inputRef.current.value;

    // if input has a value, label should stay at top
    if (inpValue.trim().length > 0) return;
    // if field has only whitespace, clear it on blur
    if (inpValue.length > 0 && inpValue.trim().length === 0)
      inputRef.current.value = "";
    setIsActive((prevState) => !prevState);
  };

  const handleValidation = (inpValue) => {
    const validationResults = [mandatoryValidate(inpValue)];

    validationResults.forEach((result) => {
      if (!result.isValid) {
        setValidation({...result, msg: t(result.msg)});
        return;
      } else {
        setValidation(initialValidation)
      }
    });
  };

  return (
    <div
      className={`c-input ${
        isActive && "c-input--active"
      } 
      ${!validation.isValid ? "c-input--error" : ""}
      ${formControlClasses}`}
    >
      <label for={inpId} className={`c-input__label ${!validation.isValid ? "c-input__label--error" : ""} ${labelClasses}`}>
        {label}
        {isRequired ? " *" : ""}
      </label>
      <input
        className={`c-input__input ${inputClasses}`}
        placeholder={placeholder}
        type={type}
        name={inpName}
        id={inpId}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={(e) => {
            handleValidation(e.target.value)
            handleFocus()
        }}
        autoCorrect={"off"}
        autoComplete="Off"
        spellCheck={"false"}
        ref={inputRef}
        maxLength={maxLength}
        minLength={minLength}
        onKeyUp={(e) => handleValidation(e.target.value)}
      />
      {!validation.isValid && (
        <span className="c-input__error-msg">{validation.msg}</span>
      )}
    </div>
  );
};

export default Input;
