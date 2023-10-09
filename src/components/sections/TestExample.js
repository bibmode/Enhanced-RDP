import React from "react";
import { motion } from "framer-motion";

const TestExample = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 1, duration: 1 }}
      viewport={{
        once: true,
        margin: "0px 100px -50px 0px",
      }}
      className="text-center my-28 sm:my-32 flex flex-col items-center"
    >
      <motion.h3 className="text-3xl lg:text-4xl font-bold font-oxanium">
        From Thousands to Hundreds
      </motion.h3>
      <motion.p className="mt-4 max-w-2xl xl:text-lg">
        The example below is a time series dataset originally consisting of
        5,184 points that is subjected to ERDP that resulted to the reduction to
        648 points while still preserving the original shape.
      </motion.p>

      {/* comparison */}
      <motion.div className="font-oxanium font-semibold mt-12 xl:mt-16 flex flex-col sm:flex-row sm:justify-between">
        <div className="mb-10 sm:mr-6 md:mr-8">
          <div className="bg-white p-3 lg:p-7 xl:p-10 rounded-2xl border border-slate-600">
            <img src="./images/before.jpg" alt="before" />
          </div>
          <h5 className="mt-4 lg:text-lg">Original graph with 5,184 points</h5>
        </div>
        <div className="">
          <div className="bg-white p-3 lg:p-7 xl:p-10 rounded-2xl border border-slate-600">
            <img src="./images/after.jpg" alt="after" />
          </div>
          <h5 className="mt-4 lg:text-lg">New graph with 648 points</h5>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestExample;
