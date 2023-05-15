import {forwardRef, useImperativeHandle, useRef} from "react";
import "./Modal.css";
import Button from "../Button/Button";

const Modal = ({children, title, btnClose = "Close", handleBtnPrimary}, ref) => {
  const modalRef = useRef();

  const handleOpen = () => {
    modalRef.current.showModal();
  };
  const handleClose = () => {
    modalRef.current.close();
  };

  useImperativeHandle(ref, () => {
    return {
      handleOpen: () => handleOpen(),
    };
  });

  return (
    <dialog className="c-modal" ref={modalRef}>
      <h1 className="c-modal__title">{title}</h1>
      <div className="c-modal__content">{children}</div>
      <div className="c-modal__footer">
        {/* <button className="c-modal__btn-secondary" onClick={handleClose}>{btnClose}</button> */}
        <Button
          btnName={btnClose}
          type={"button"}
          variant={"secondary-sm"}
          btnWprClasses={"c-modal__btn c-modal__btn-secondary"}
          handleClick={handleClose}
        />
        <Button
          btnName={"Save"}
          type={"button"}
          variant={"primary-sm"}
          btnWprClasses={"c-modal__btn c-modal__btn-primary"}
          handleClick={handleBtnPrimary}
        />
      </div>
    </dialog>
  );
};

export default forwardRef(Modal);
