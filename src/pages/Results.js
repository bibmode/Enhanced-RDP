import React, { useContext, useEffect } from "react";
import { LayoutContext } from "../components/layout/LayoutContext";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import WavyLine from "../components/WavyLine";
import ResultsTable from "../components/ResultsTable";
import { Circles } from "react-loader-spinner";

import { LuUndo } from "react-icons/lu";
import LayoutContainer from "../components/layout/LayoutContainer";

const Results = () => {
  const context = useContext(LayoutContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context.file == null || context.data == null) {
      navigate("/");
    }
  }, [context]);

  return (
    <LayoutContainer>
      {!context.data ? (
        <div className="w-full flex justify-center pt-20">
          <Circles
            height="100"
            width="100"
            color="#4338ca"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-white border border-slate-600 relative  py-6 lg:pt-8 lg:pb-12 px-4 md:px-8 xl:px-16 rounded-3xl flex justify-center mt-12 mb-24 lg:mb-32 h-[400px] md:h-[450px] lg:h-[500px] xl:h-[570px]">
          <Chart data={context.data} />
        </div>
      )}

      {/* wavy line */}
      <WavyLine />

      {/* results table */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold font-oxanium">
          Compare Line Simplification Results
        </h2>
        <p className="pt-4 xl:pt-8 pb-8 md:text-lg max-w-2xl mx-auto">
          Check out the difference between the original and the simplified
          resulting version of this tool which you can download
        </p>
      </div>
      <ResultsTable />

      {/* simplify button */}
      <button
        onClick={() =>
          navigate("/", {
            replace: true,
          })
        }
        className="bg-indigo-700 hover:bg-indigo-800 text-2xl text-white px-9 md:px-12 py-4 w-full sm:w-fit flex justify-center rounded-full mx-auto mb-16 md:mb-20 lg:mb-32"
      >
        <LuUndo />
        <span className="text-lg ml-2 font-oxanium font-semibold">
          Simplify Another
        </span>
      </button>
    </LayoutContainer>
  );
};

export default Results;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {
  const context = useContext(LayoutContext);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${context.file?.name}`,
      },
    },
    scaleSteps: 500,
    scaleStepWidth: 10,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 15,
        },
      },
    },
  };

  const labels = data.row_1;

  const settings = {
    labels,
    datasets: [
      {
        label: `Simplified ${data.columns[1]}`,
        data: data.row_2_rdp,
        borderColor: "rgb(79, 70, 229)",
        backgroundColor: "rgba(79, 70, 229, 0.5)",
        spanGaps: true,
        pointRadius: 1,
        borderWidth: 3,
      },
      {
        label: `Original ${data.columns[1]}`,
        data: data.row_2,
        borderColor: "rgb(6, 182, 212)",
        backgroundColor: "rgba(6, 182, 212, 0.5)",
        pointRadius: 1,
        borderWidth: 3,
      },
    ],
  };

  return <Line options={options} data={settings} />;
}
