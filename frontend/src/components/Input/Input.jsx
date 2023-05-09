import React, {useEffect, useImperativeHandle, useRef, useState} from "react";
import "./Input.css";
import {mandatoryValidate} from "../../utils/validations";
import useTranslation from "../../hooks/useTranslation";

const Input = ({
  label = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
  formControlClasses = "",
  labelClasses = "",
  inputClasses = "",
  inpName = "",
  inpId = "",
  isRequired = false,
  maxLength = "",
  minLength = "",
  setFormError = () => {},
  
}, ref ) => {
  const initialValidation = {
    isValid: true,
    msg: "",
  };
  const [isActive, setIsActive] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [validation, setValidation] = useState(initialValidation);
  const {t} = useTranslation();
  const inputRef = useRef();

  const handleFocusBlur = () => {
    const inpValue = inputRef.current.value;

    // if input has a value, label should stay at top
    if (inpValue.trim().length > 0) return;
    // if field has only whitespace, clear it on blur
    if (inpValue.length > 0 && inpValue.trim().length === 0)
      inputRef.current.value = "";
    setIsActive((prevState) => !prevState);
  };

  const handleValidation = (inpValue) => {
    let validationResults = [];

    if (isRequired){ validationResults.push(mandatoryValidate(inpValue))}

    return validationResults.map((result) => {
      if (!result.isValid) {
        setValidation({...result, msg: t(result.msg)});
      } else {
        setValidation(initialValidation)
      }
      return result.isValid;
    });
  };

  useEffect(() => {
    setFormError((prevState) => {
      return {
        ...prevState,
        [inpId]: !validation.isValid
      }
    })
  // eslint-disable-next-line
  }, [validation]);

  useImperativeHandle(
    ref,() => {
      return {
        validateInp: () => {
          return handleValidation(inpValue)
        },
        inpValue
      }
    }
  );


  return (
    <div
      className={`c-input ${
        isActive && "c-input--active"
      } 
      ${!validation.isValid ? "c-input--error" : ""}
      ${formControlClasses}`}
    >
      <label htmlFor={inpId} className={`c-input__label ${!validation.isValid ? "c-input__label--error" : ""} ${labelClasses}`}>
        {label}
        {isRequired ? " *" : ""}
      </label>
      <input
        className={`c-input__input ${inputClasses}`}
        placeholder={placeholder}
        type={type ===  "date" ? "text" : type}
        name={inpName}
        id={inpId}
        onChange={(e) => {
          setInpValue(e.target.value)
          onChange(e)
        }}
        onFocus={() => {
          if (type === "date") {
            inputRef.current.type='date'
            inputRef.current.blur()
            inputRef.current.focus()
          }
          handleFocusBlur()
        }}
        onBlur={(e) => {
          if (type === "date") {
            inputRef.current.type='text'
          }
            handleValidation(e.target.value)
            handleFocusBlur()
        }}
        autoCorrect={"off"}
        autoComplete="Off"
        spellCheck={"false"}
        ref={inputRef}
        maxLength={maxLength}
        minLength={minLength}
        onKeyUp={(e) => handleValidation(e.target.value)}
        value={inpValue}
      />
      {validation.isValid === false ? (
        <span className="c-input__error-msg">{validation.msg}</span>
      ) : ""}
    </div>
  );
};

export default React.forwardRef(Input);
