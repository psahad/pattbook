import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 12,
          family: "'Graphik Web', 'sans-serif'",
        },
        color: "#888989",
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8,
      },
    },
  },
  layout: {
    padding: {
      bottom: 10,
    },
  },
};

export function ChartDoughnut({data}) {
  return <Doughnut data={data} options={options} />;
}
