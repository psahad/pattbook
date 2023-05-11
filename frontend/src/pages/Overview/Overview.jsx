import "./Overview.css";
import {ChartDoughnut, OverviewCard} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import {calcTotal, filterArray, multiFilterArray} from "../../utils/sortFilter";

const Overview = () => {
  const [logs] = useLocalStorage("logs", "[]");
  const parsedLogs = logs ? JSON.parse(logs).reverse() : [];
  
  const totalOpenLending = calcTotal(multiFilterArray(parsedLogs, {type: "lend", isOpen: true }), "amount")
  const totalOpenBorrowing = calcTotal(multiFilterArray(parsedLogs, {type: "borrow", isOpen: true }), "amount")

  const data = {
    labels: ['Total Open Lending', 'Total Open Borrowing'],
    datasets: [
      {
        label: 'Amount in Rs',
        data: [totalOpenLending, totalOpenBorrowing],
        backgroundColor: [
          'rgba(0, 226, 109, 0.9)',
          'rgba(227, 1, 76, 0.9)',
        ],
        borderWidth: 0,
        hoverOffset: 10,
        spacing: 2, 
      },
    ],
  };

  return (
    <div className="page p-overview">
      <section className="p-overview__section">
        <div className="p-overview__chart-wpr">
          <ChartDoughnut data={data} />
        </div>
        <OverviewCard
          title={"Total open lendings"}
          subTitle={"Money to get"}
          amount={totalOpenLending}
        />
        <OverviewCard
          title={"Total open borrowings"}
          subTitle={"Money to give"}
          amount={totalOpenBorrowing}
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
