import "./Button.css"

const Button = ({btnName, helperText, variant, type,btnWprClasses, btnClasses, isDisabled=false }) => {

  return (
    <div className={`c-button ${btnWprClasses}`} >
        <button className={`c-button__btn c-button__btn--${variant}`} disabled={isDisabled}>{btnName}</button>
        <span className={`c-button__helper`}>{helperText}</span>
    </div>
  );
}

export default Button;
