import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //y axis
  LinearScale, // x axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, //y axis
  LinearScale, // x axis
  PointElement,
  Legend,
  Tooltip
);

export const SalesReportChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sales Report",
        data: [6, 3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: { min: 3, max: 6 },
    },
  };
  return (
    <div className="w-[50%]">
      <Line
        data={data}
        //@ts-ignore
        options={options}
      />
    </div>
  );
};
