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
  onClickBtnPrimary,
  onClickBtnSecondary,
  selectedValue,
}) => {
  const modalRefObj = useRef();
  const handleClick = () => {
    modalRefObj.current.handleOpen();
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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon__stroke-fc-primary"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                  // stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
      </button>
      <Modal
        ref={modalRefObj}
        title={modalTitle}
        btnPrimary={btnPrimary}
        btnSecondary={btnSecondary}
        handleBtnPrimary={onClickBtnPrimary}
        handleBtnSecondary={onClickBtnSecondary}
      >
        {children}
      </Modal>
    </div>
  );
};
