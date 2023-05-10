import {useRef, useState} from "react";
import {Input, Button} from "../components";
import useTranslation from "../hooks/useTranslation";

const FormLendAdd = () => {
  const {t} = useTranslation();

  const [formError, setFormError] = useState({
    borrowerName: false,
    amount: false,
  });
  const borrowerNameInpRefObj = useRef();
  const amountInpRefObj = useRef();

  const inpRefObjs = {
    borrowerNameInpRefObj,
    amountInpRefObj,
  };
  const formValidator = () => {
    let formIsValid = true;
    Object.entries(inpRefObjs).forEach(([key, value]) => {
      let inpValidationResult = value.current.validateInp();
      inpValidationResult.forEach((res) => {
        if (!inpValidationResult) {
          formIsValid = false;
        }
      });
    });

    return formIsValid;
  };

  const handleLendSubmit = (e) => {
    e.preventDefault();
    // formValidator()
    console.log("formValidator()", formValidator());
  };
  return (
    <form className="p-add__form" onSubmit={handleLendSubmit}>
      <Input
        label={t("add.tab.inputs.borrowerName")}
        type={"text"}
        inpId={"borrowerName"}
        isRequired="true"
        setFormError={setFormError}
        ref={borrowerNameInpRefObj}
      />
      <Input
        label={t("add.tab.inputs.amount")}
        type={"number"}
        inpId={"amount"}
        isRequired="true"
        setFormError={setFormError}
        ref={amountInpRefObj}
      />
      <Input label={t("add.tab.inputs.purpose")} type={"text"} inpId={"purpose"} maxLength="50" />
      <Input
        label={t("add.tab.inputs.returnDate")}
        type={"date"}
        inpId={"returnDate"}
      />
      <Button
        btnName={t("add.tab.inputs.lenderSubmit")}
        type={"submit"}
        variant={"primary"}
        btnWprClasses={"p-add__form__btn-submit"}
        // isDisabled={false}
        isDisabled={Object.entries(formError).find(
          ([key, value]) => value === true
        )}
      />
    </form>
  );
};

export default FormLendAdd;
