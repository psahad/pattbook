import "./FlatCard.css"

const FlatCard = ({item}) => {
  
  return (
    <article className={`c-flatcard ${!item.isOpen ? 'c-flatcard--closed' : item.type === 'lend' ? 'c-flatcard--lend' : 'c-flatcard--borrow'}`}>
      <div className="c-flatcard__top-section">
        <div className='c-flatcard__top-section__left'>
          <h4 className='c-flatcard__name'>{item.type === "borrow" ? item.from : item.to }</h4>
          <p className='c-flatcard__purpose ff-montserrat'>{item.purpose}</p>
        </div>
        <div>
          <h1 className='c-flatcard__amount'> &#8377; {item.amount}</h1>
        </div>
      </div>
      <div  className="c-flatcard__bottom-section">
        {/* <span className='c-flatcard__date ff-montserrat'>{item.paidDate ? item.paidDate : "-"}</span> */}
        <span className='c-flatcard__date ff-montserrat'>{item.expectedReturnDate ? item.expectedReturnDate : "-"}</span>
        {/* <span className='c-flatcard__date ff-montserrat'>{item.isClosed ? item.closedDate : item.expectedClosingDate ? item.expectedClosingDate : "-"}</span> */}
      </div>
    </article>
  );
}

export default FlatCard;
