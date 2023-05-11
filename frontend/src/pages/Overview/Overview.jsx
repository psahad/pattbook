import "./Overview.css";
import {OverviewCard} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import {calcTotal, filterArray, multiFilterArray} from "../../utils/sortFilter";

const Overview = () => {
  const [logs] = useLocalStorage("logs", "[]");
  const parsedLogs = logs ? JSON.parse(logs).reverse() : [];

  return (
    <div className="page p-overview">
      <section className="p-overview__section">
        <OverviewCard
          title={"Total open lendings"}
          subTitle={"Money to get"}
          amount={calcTotal(multiFilterArray(parsedLogs, {type: "lend", isOpen: true }), "amount")}
        />
        <OverviewCard
          title={"Total open borrowings"}
          subTitle={"Money to give"}
          amount={calcTotal(multiFilterArray(parsedLogs, {type: "borrow", isOpen: true }), "amount")}
        />
      </section>
      <section className="p-overview__section">
        <OverviewCard
          title={"Total lendings"}
          amount={calcTotal(filterArray(parsedLogs, "type", "lend"), "amount")}
        />
        <OverviewCard
          title={"Total borrowings"}
          amount={calcTotal(filterArray(parsedLogs, "type", "borrow"), "amount")}
        />
      </section>
    </div>
  );
};

export default Overview;
