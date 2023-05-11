import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Details.css";
import {Button, DetailCard} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";

const Details = () => {
  const navigateListRef = useRef(false);

  const navigate = useNavigate();
  const [logs, setLogs] = useLocalStorage("logs", "[]");
  const parsedLogs = logs ? JSON.parse(logs) : [];

  const {
    state: {item},
  } = useLocation();

  const handleClose = (id) => {
    const filteredLogs = parsedLogs.filter((parsedLog) => parsedLog.id !== id);

    filteredLogs.push({
      ...item,
      isOpen: false,
      closedAt: new Date().toLocaleString(),
    });
    setLogs(JSON.stringify(filteredLogs));
    navigateListRef.current = true;
  };

  useEffect(() => {
    if (navigateListRef.current) {
      navigate("/list");
    }
    // eslint-disable-next-line
  }, [logs]);

  return (
    <div className="page p-details">
      <div className="p-details__details-wpr">
        {item.type === "lend" ? (
          <DetailCard label={"Name of Borrower"} value={item.to} />
        ) : (
          <DetailCard label={"Name of Lender"} value={item.from} />
        )}
        <DetailCard label={"Amount"} value={item.amount} isAmount />
        <DetailCard
          label={"Purpose"}
          value={item.purpose ? item.purpose : "-"}
        />
        <DetailCard label={"Status"} value={item.isOpen ? "Open" : "Closed"} />
        {!item.isOpen && (
          <DetailCard label={"Closed on"} value={item.closedAt} />
        )}
        <DetailCard label={"Created on"} value={item.createdAt} />
        {item.isOpen && (
          <Button
            // btnName={t("add.tab.inputs.borrowerSubmit")}
            btnName={"Close"}
            type={"button"}
            variant={"secondary"}
            btnWprClasses={"p-details__btn-close"}
            handleClick={() => handleClose(item.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Details;
