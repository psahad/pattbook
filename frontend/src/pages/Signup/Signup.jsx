import { useRef, useState } from "react";
import {Button, Input} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import "./Signup.css";
import { signupUser } from "../../api";
import { Link } from "react-router-dom";

const Signup = () => {
  const {t} = useTranslation();

  const [formError, setFormError] = useState({
    name: false,
    phone: false,
    password: false,
  });
  const nameInpRefObj = useRef();
  const phoneInpRefObj = useRef();
  const passwordInpRefObj = useRef();
  const inpRefObjs = {
    nameInpRefObj,
    phoneInpRefObj,
    passwordInpRefObj
  };

  const formValidator = () => {
    let formIsValid = true;

    Object.entries(inpRefObjs).forEach(([key, value]) => {
      let inpValidationResult = value.current.validateInp();
      inpValidationResult.forEach((res) => {
        if (!res) {
          formIsValid = false;
        }
      });
    });

    return formIsValid;
  };

  const handleSignupSubmit = async(e) => {
    e.preventDefault();
    const formValidationResult = formValidator();
    console.log("formValidator()", formValidationResult);
    if (!formValidationResult) return;

    const payload = {
        name: e.target["name"].value,
        phone: e.target["phone"].value,
        password: e.target["password"].value,
    }

    try {
        const response = await signupUser(payload);
        console.log("Response:",response);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="page page-full p-entry">
      <div className="p-entry__wpr">
        <div className="title-page__wpr">    
            <h3 className="title-page title-page--lg">
            {/* Create a Pattbook Account */}
            {t("userEntry.signup.pageTitle")}
            </h3>
        </div>
        <form className="p-entry__form" onSubmit={handleSignupSubmit}>
          <Input
            label={t("userEntry.signup.inputs.name")}
            type={"text"}
            inpId={"name"}
            isRequired="true"
            setFormError={setFormError}
            ref={nameInpRefObj}
          />
          <Input
            label={t("userEntry.signup.inputs.phone")}
            type={"tel"}
            inpId={"phone"}
            isRequired="true"
            setFormError={setFormError}
            ref={phoneInpRefObj}
          />
          <Input
            label={t("userEntry.signup.inputs.password")}
            type={"password"}
            inpId={"password"}
            isRequired="true"
            setFormError={setFormError}
            ref={passwordInpRefObj}
          />
          <Button
            btnName={t("userEntry.signup.btnSubmit")}
            type={"submit"}
            variant={"primary"}
            btnWprClasses={"p-entry__form__btn-submit"}
            isDisabled={Object.entries(formError).find(
              ([key, value]) => value === true
            )}
          />
        </form>
        <div className="p-entry__navigate-wpr">
            <span className="p-entry__navigate-title">{t("userEntry.signup.navigationTitle")} </span>
            <Link className="p-entry__navigate-link" to={"/login"}>{t("userEntry.signup.navigationLink")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
