import {useRef} from "react";
import Modal from "../Modal/Modal";
import "./Chooser.css";

export const Chooser = ({
  children,
  icon,
  chooserName,
  modalTitle,
  btnPrimary,
  btnSecondary,
  btnClose,
  onClickBtnPrimary,
  handleBtnSecondary,
  selectedValue
}) => {
  const modalRefObj = useRef()
  const handleClick = () => {
    modalRefObj.current.handleOpen()
  };

  return (
    <div className="c-chooser">
      <button className="c-chooser__chooser-btn-wpr" onClick={handleClick}>
        <div className="c-chooser__chooser-btn-wpr__left">
          <span className="c-chooser__icon">{icon}</span>
          <span className="c-chooser__name">{chooserName}</span>
        </div>
        <div className="c-chooser__chooser-btn-wpr__right">
          <span className="c-chooser__selected">{selectedValue}</span>
          <span className="c-chooser__open-icon">
              <svg viewBox="-4.5 0 20 20" version="1.1"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"> </path> </g> </g> </g> </g></svg>
          </span>
        </div>
      </button>
      <Modal ref={modalRefObj} title={modalTitle} btnClose={btnClose} handleBtnPrimary={onClickBtnPrimary}>
        {children}
      </Modal>
    </div>
  );
};
