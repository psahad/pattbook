import {useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";
import {Input, Button} from "../components";
import useTranslation from "../hooks/useTranslation";
import { useLocalStorage } from "../hooks/useStorage";

const FormLendAdd = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [logs, setLogs] = useLocalStorage("logs", "[]");
  const parsedLogs = logs ? JSON.parse(logs) : []

  const navigateListRef = useRef(false)
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
    console.log("formValidator()", formValidator());
    if (!formValidator()) return;
    const payload = {
      id: uuidv4(),
      type: "lend",
      from: "Sahad P",
      to: e.target["borrowerName"].value,
      amount: e.target["amount"].value,
      purpose: e.target["purpose"].value,
      expectedReturnDate: e.target["returnDate"].value,
      isOpen: true,
      closedAt: null,
      createdAt: new Date().toLocaleString(),
    };
    parsedLogs.push(payload)
    setLogs(() => JSON.stringify(parsedLogs))
    navigateListRef.current = true;
  };

  useEffect(() => {
    console.log(logs);
    if (navigateListRef.current) {
      navigate("/list")
    }
    // eslint-disable-next-line
  }, [logs]);

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
      <Input
        label={t("add.tab.inputs.purpose")}
        type={"text"}
        inpId={"purpose"}
        maxLength="50"
      />
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
