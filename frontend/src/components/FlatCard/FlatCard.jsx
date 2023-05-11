import { formatDate } from "../../utils/formatter";
import "./FlatCard.css"
import { Link } from "react-router-dom";

const FlatCard = ({item}) => {
  
  return (
    <Link to={item.id} state={{ item }} className={`c-flatcard ${!item.isOpen ? 'c-flatcard--closed' : item.type === 'lend' ? 'c-flatcard--lend' : 'c-flatcard--borrow'}`}>
      <div className="c-flatcard__top-section">
        <div className='c-flatcard__top-section__left'>
          <h4 className='c-flatcard__name'>{item.type === "borrow" ? item.from : item.to }</h4>
          <p className='c-flatcard__purpose ff-montserrat'>{item.purpose}</p>
        </div>
        <div>
          <h1 className='c-flatcard__amount'> &#8377; {item.amount}</h1>
        </div>
      </div>
      <div className="c-flatcard__bottom-section">
        {/* <span className='c-flatcard__date ff-montserrat'>{item.paidDate ? item.paidDate : "-"}</span> */}
        {item.isOpen ? (
            <>
              <span className='c-flatcard__date ff-montserrat'>{"Return expected on: "}</span>
              <span className='c-flatcard__date ff-montserrat'>{item.expectedReturnDate ? formatDate(item.expectedReturnDate) : "N/A"}</span>
            </>
          )
          : (
            <>
              <span className='c-flatcard__date ff-montserrat'>{"Closed on: "}</span>
              <span className='c-flatcard__date ff-montserrat'>{item.closedAt ? formatDate(item.closedAt) : "N/A"}</span>
            </>
          )
        }
        {/* <span className='c-flatcard__date ff-montserrat'>{item.isClosed ? item.closedDate : item.expectedClosingDate ? item.expectedClosingDate : "-"}</span> */}
      </div>
    </Link>
  );
}

export default FlatCard;
