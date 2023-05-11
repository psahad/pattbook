import "./DetailCard.css";

const DetailCard = ({label, value, isAmount = false}) => {
  return (
    <div className="c-detailcard">
      <div className="c-detailcard__label">{label}</div>
      <div className="c-detailcard__value">
        {isAmount && (
            <span>&#8377; </span>
        )}
        {value}
    </div>
    </div>
  );
};

export default DetailCard;
