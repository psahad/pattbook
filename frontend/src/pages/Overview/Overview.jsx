import "./Overview.css";
import {ChartDoughnut, OverviewCard} from "../../components";
import {useLocalStorage} from "../../hooks/useStorage";
import {calcTotal, filterArray, multiFilterArray} from "../../utils/sortFilter";

const Overview = () => {
  const [logs] = useLocalStorage("logs", "[]");
  const parsedLogs = logs ? JSON.parse(logs).reverse() : [];
  
  const totalOpenLending = calcTotal(multiFilterArray(parsedLogs, {type: "lend", isOpen: true }), "amount")
  const totalOpenBorrowing = calcTotal(multiFilterArray(parsedLogs, {type: "borrow", isOpen: true }), "amount")
  const totalLending = calcTotal(filterArray(parsedLogs, "type", "lend"), "amount")
  const totalBorrowing = calcTotal(filterArray(parsedLogs, "type", "borrow"), "amount")

  const totalOpenData = {
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

  const totalData = {
    labels: ['Total Lending', 'Total Borrowing'],
    datasets: [
      {
        label: 'Amount in Rs',
        data: [totalLending, totalBorrowing],
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
          <ChartDoughnut data={totalOpenData} />
        </div>
        <OverviewCard
          title={"Total open lendings"}
          subTitle={"Money to get"}
          amount={totalOpenLending}
          variant={"green"}
        />
        <OverviewCard
          title={"Total open borrowings"}
          subTitle={"Money to give"}
          amount={totalOpenBorrowing}
          variant={"red"}
        />
      </section>
      <section className="p-overview__section">
        <div className="p-overview__chart-wpr">
          <ChartDoughnut data={totalData} />
        </div>
        <OverviewCard
          title={"Total lendings"}
          amount={totalLending}
          variant={"green"}
        />
        <OverviewCard
          title={"Total borrowings"}
          amount={totalBorrowing}
          variant={"red"}
        />
      </section>   
    </div>
  );
};

export default Overview;
