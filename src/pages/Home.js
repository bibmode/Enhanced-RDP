import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Circles } from "react-loader-spinner";
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
import { Link } from "react-router-dom";

// components
import { LayoutContext } from "../components/layout/LayoutContext";
import Features from "../components/sections/Features";
import TestExample from "../components/sections/TestExample";
import ERDPInfo from "../components/sections/ERDPInfo";
import WavyLine from "../components/WavyLine";
import LayoutContainer from "../components/layout/LayoutContainer";
import Downloadables from "../components/sections/Downloadables";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const borderColor = "rgb(99, 102, 241)";
  const backgroundColor = "rgb(165, 180, 252)";

  const context = useContext(LayoutContext);

  const [fileDrag, setFileDrag] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    context.setData(null);
  }, []);

  useEffect(() => {
    if (context.data != null) {
      context.setLabels(context.data.row_1);
      context.setInfo({
        labels: context.data.row_1,
        datasets: [
          {
            label: `Original ${context.data.columns[1]}`,
            data: context.data.row_2,
            borderColor,
            backgroundColor,
          },
        ],
      });
      context.setOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: context.file.name,
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
            },
          },
        },
      });
    }
  });

  const handleDragOver = (e) => {
    e.preventDefault();
    setFileDrag(true);
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setFileDrag(false);
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDrag(false);

    let files = [...e.dataTransfer.files];

    console.log(files[0]);

    if (files.length > 1) {
      toast.error("Drop 1 file only!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (files[0].type !== "text/csv") {
        toast.error("CSV files only!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        context.setFile(files[0]);
        const formData = new FormData();
        formData.append("file", files[0]);

        setLoading(true);

        axios
          .post("/api/simplify", formData)
          .then((res) => {
            setLoading(false);
            context.setData(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            toast.error("Error uploading! Try again.", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            setLoading(false);
          });
      }
    }
  };

  const handleBrowseFile = (e) => {
    const inputFile = e.target.files[0];

    context.setFile(inputFile);
    const formData = new FormData();
    formData.append("file", inputFile);

    setLoading(true);

    axios
      .post("/api/simplify", formData)
      .then((res) => {
        setLoading(false);
        context.setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      });

    e.target.value = null;
  };

  const handleCancel = () => {
    context.setData(null);
  };

  return (
    <LayoutContainer>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-10 xl:mt-20 xl:mb-16">
        {/* title */}
        <div className="flex-grow">
          <h1 className="text-2xl lg:text-6xl md:text-3xl md:max-w-xl lg:max-w-sm xl:max-w-xl md:mx-auto lg:mx-0 text-center lg:text-left xl:leading-normal mt-6 md:mt-14 mb-4 font-bold font-oxanium text-indigo-700">
            Time Series Line Simplification Generator
          </h1>
          <p className="text-md md:text-lg md:text-center lg:text-left lg:max-w-sm xl:max-w-lg">
            The Ramer-Douglas-Peucker technique is used to visualize time series
            files and eliminate data points from thousands to hundreds without
            losing the data's conclusions.
          </p>
        </div>

        {/* drop box */}
        <div
          className={`bg-white mt-8 mb-12 xl:my-0 py-6 ${
            loading ? "xs:px-2" : "xs:px-6"
          } lg:p-12 lg:w-[480px] lg:h-[400px] xl:w-[560px] xl:h-[470px] rounded-3xl shadow-xl flex-shrink-0`}
        >
          {loading ? (
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center justify-around">
                <Circles
                  height="170"
                  width="170"
                  color="#4338ca"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>

              <p className="text-xl text-center mt-10">
                {context.file ? context.file.name : ""}
              </p>
            </div>
          ) : !loading && context.data == null ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`${
                fileDrag
                  ? "bg-cyan-50 border-cyan-600"
                  : "bg-white border-indigo-300"
              } py-8 flex justify-center items-center flex-col h-full w-full rounded-2xl border-dashed border-2 `}
            >
              <h3 className="text-md md:text-xl xl:text-2xl">
                Drop your CSV File Here
              </h3>
              <label
                htmlFor="file-input"
                className={`xs:text-md md:text-lg xl:text-xl hover:bg-indigo-100 text-gray-800 mt-4 ${
                  fileDrag ? "border-cyan-600" : "border-indigo-600"
                } border rounded-xl py-2 px-12 xl:px-14 cursor-pointer`}
              >
                Browse Files
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                accept=".csv, text/csv"
                className="hidden"
                onChange={handleBrowseFile}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
            </div>
          ) : (
            <div className="h-full flex flex-col justify-around">
              <Line options={context.options} data={context.info} />
              <div className="flex justify-center mb-3 mt-4">
                <button
                  className="bg-cyan-100 text-indigo-800 font-semibold md:text-xl py-3 px-12 rounded-xl mr-4"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <Link
                  to={`/results`}
                  className="text-white bg-indigo-700 font-semibold md:text-xl py-3 px-12 rounded-xl"
                >
                  Simplify
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* wavy line */}
      <WavyLine />

      {/* downlaodables */}
      <Downloadables />

      {/* E-RDP Info */}
      <ERDPInfo />
      {/* Features */}
      <Features />
      {/* Example */}
      <TestExample />
    </LayoutContainer>
  );
};

export default Home;
