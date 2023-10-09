import React from "react";
import DownloadablesTable from "../DownloadablesTable";
import { motion } from "framer-motion";

const Downloadables = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
        margin: "0px 100px -50px 0px",
      }}
    >
      {/* title*/}
      <div className="mt-48 xl:mt-72 xl:mb-14 text-center lg:flex lg:flex-between">
        <nobr className="text-xl lg:text-3xl xl:text-4xl xl:break-keep lg:mr-10 mt-2 xl:mt-4 font-oxanium font-semibold">
          Example Time Series Datasets
        </nobr>
        <p className="mt-2 lg:text-left xl:text-lg">
          You can use these example csv files to test the Time Series Line
          Simplification generator above. Each of these are time series datasets
          sourced from kaggle.com.
        </p>
      </div>

      {/* table */}
      <DownloadablesTable />
    </motion.section>
  );
};

export default Downloadables;
