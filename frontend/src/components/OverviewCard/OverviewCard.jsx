import "./OverviewCard.css"

export const OverviewCard = ({title, subTitle, amount, variant}) => {
  return (
    <div className="c-overviewcard">
      <div className="c-overviewcard__wpr">
        <div className="c-overviewcard__wpr__left">
          <h2 className="c-overviewcard__title">{title}</h2>
          <h6 className="c-overviewcard__sub-title">{subTitle}</h6>
        </div>
        <div className={`c-overviewcard__wpr__right c-overviewcard__wpr__right--${variant}`}>&#8377; {amount}</div>
      </div>
    </div>
  );
};
