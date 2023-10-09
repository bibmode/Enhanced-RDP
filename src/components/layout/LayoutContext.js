import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Helmet } from "react-helmet";

export const LayoutContext = React.createContext();

const LayoutContextProvider = ({ children }) => {
  const borderColor = "rgb(99, 102, 241)";
  const backgroundColor = "rgb(165, 180, 252)";
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  });

  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);

  const [info, setInfo] = useState({
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor,
        backgroundColor,
      },
    ],
  });

  useEffect(() => {
    console.log(window.location.href);
  }, [window.location.href]);

  return (
    <LayoutContext.Provider
      value={{
        file,
        setFile,
        data,
        setData,
        options,
        setOptions,
        labels,
        setLabels,
        info,
        setInfo,
      }}
    >
      <div>
        <Helmet>
          <title>E-RDP</title>
          <link rel="canonical" href="http://e-rdp.com" />
          <link rel="icon" href="/images/logo.png" />
          <meta
            name="description"
            content="Revamp your time-series data with our lightning-fast Enhanced Ramer-Douglas-Peucker algorithm. Reduce up to 96.88% points while preserving your data's essence."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200;300;400;500;600;700;800&family=Pacifico&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </div>
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
