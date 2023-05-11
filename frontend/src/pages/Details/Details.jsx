import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Details.css";
import {Button, DetailCard} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import useTranslation from "../../hooks/useTranslation";
import { formatDate } from "../../utils/formatter";

const Details = () => {
  const navigateListRef = useRef(false);

  const {t} = useTranslation();
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
          <DetailCard label={t("add.tab.inputs.borrowerName")} value={item.to} />
        ) : (
          <DetailCard label={t("add.tab.inputs.lenderName")} value={item.from} />
        )}
        <DetailCard label={t("add.tab.inputs.amount")} value={item.amount} isAmount />
        <DetailCard
          label={t("add.tab.inputs.purpose")}
          value={item.purpose ? item.purpose : "N/A"}
        />
        <DetailCard label={t("add.tab.inputs.status")} value={item.isOpen ? t("add.tab.inputs.open") : t("add.tab.inputs.closed")} />
        {!item.isOpen && (
          <DetailCard label={t("add.tab.inputs.closedOn")} value={formatDate(item.closedAt)} />
        )}
        <DetailCard label={t("add.tab.inputs.createdOn")} value={formatDate(item.createdAt, true)} />
        {item.isOpen && (
          <Button
            // btnName={t("add.tab.inputs.borrowerSubmit")}
            btnName={t("add.tab.inputs.closeButton")}
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
