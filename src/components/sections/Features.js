import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { FaAward } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Features = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {/* Features navigation*/}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.8 }}
        viewport={{
          once: true,
          margin: "0px 100px -50px 0px",
        }}
        className="flex items-center mt-32 mb-7"
      >
        <h3 className="text-2xl lg:text-4xl font-oxanium font-semibold mr-auto">
          Features
        </h3>
        <div className="flex">
          <button
            onClick={() => setPage(0)}
            className="text-2xl lg:text-3xl border border-slate-600 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-100 rounded-full p-3 mr-6"
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={() => setPage(1)}
            className="text-2xl lg:text-3xl border border-slate-600 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-100 rounded-full p-3"
          >
            <FiArrowRight />
          </button>
        </div>
      </motion.div>

      {/* feature page 1 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.8 }}
        viewport={{
          once: true,
          margin: "0px 100px -50px 0px",
        }}
      >
        {page ? <FeaturePage2 /> : <FeaturePage1 />}
      </motion.div>
    </>
  );
};

export default Features;

export const FeaturePage1 = () => {
  return (
    <div className="sm:flex">
      {/* main box */}
      <div className="flex flex-col items-start bg-white border border-slate-600 rounded-3xl py-10 md:py-12 xl:py-14 px-6 md:px-8 lg:px-10 xl:px-14 sm:mr-5 xl:mr-8">
        {/* learn tag */}
        <div className="flex items-center text-2xl text-indigo-600 rounded-full pl-5 pr-6 py-2 bg-indigo-100 border border-indigo-700">
          <PiGraduationCapBold />
          <h6 className="text-lg ml-2 text-slate-800 font-medium">Learn</h6>
        </div>

        {/* description */}
        <h5 className="font-oxanium text-xl md:text-2xl lg:text-3xl font-semibold sm:font-bold pt-10 pb-3">
          Powered by CPU Parallelization for Faster Processing
        </h5>
        <p className="text-slate-600">
          The Enhanced RDP algorithm uses ThreadPoolExecutor to evaluate
          multiple polyline segments concurrently, significantly speeding up the
          algorithm's execution.
        </p>

        {/* link */}
        <Link
          to="/cpu-parallelism"
          className="flex items-center h-[100px] transition-all ease-in-out duration-100 group pt-8 text-indigo-700 hover:font-semibold hover:cursor-pointer"
        >
          <button className="transition-all ease-in-out duration-100 group-hover:p-3 text-xl md:text-2xl lg:text-3xl border  border-indigo-600 rounded-full p-2">
            <FiArrowUpRight />
          </button>
          <h6 className="font-oxanium text-lg md:text-xl pl-3 md:px-4">
            Learn More
          </h6>
        </Link>
      </div>

      {/* sub boxes */}
      <div className="font-oxanium flex my-5 sm:my-0 sm:flex-col sm:w-56 md:w-72 lg:w-80 xl:w-[380px] sm:flex-shrink-0">
        <div className="flex-1 sm:w-full flex flex-col justify-center text-center py-6 px-5 md:px-7 sm:mb-5 xl:mb-8 bg-yellow-200 rounded-3xl border border-slate-600 mr-4 sm:mr-0">
          <h6 className="flex justify-center text-3xl sm:text-5xl xl:text-6xl xl:pt-3 font-semibold">
            96.88%
          </h6>
          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg">
            Tested maximum data points reduction
          </p>
        </div>
        <div className="flex-1 sm:flex sm:flex-col sm:justify-between sm:w-full py-6 xl:py-8 px-5 md:px-7 bg-white rounded-3xl border border-slate-600">
          <div className="text-3xl sm:text-4xl lg:text-5xl flex text-yellow-500 justify-between items-center ">
            <FaAward />
            <a
              href="https://ciscon.carsu.edu.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl lg:text-3xl text-slate-700 hover:text-indigo-700 hover:bg-indigo-200 border border-slate-600 hover:border-indigo-600 rounded-full p-2"
            >
              <FiArrowUpRight />
            </a>
          </div>
          <p className="font-semibold sm:font-bold text-slate-700 mt-3 sm:text-lg lg:text-xl xl:text-2xl">
            CISCON 2023 Best Thesis Paper Award Winner
          </p>
        </div>
      </div>
    </div>
  );
};

export const FeaturePage2 = () => {
  return (
    <div className="sm:flex">
      {/* main box */}
      <div className="flex flex-col items-start bg-slate-950 border border-slate-600 rounded-3xl py-10 md:py-12 xl:py-14 px-6 md:px-8 lg:px-10 xl:px-14 sm:mr-5 xl:mr-8 text-white">
        {/* learn tag */}
        <div className="flex items-center text-2xl text-purple-600 rounded-full pl-5 pr-6 py-2 bg-purple-200">
          <PiGraduationCapBold />
          <h6 className="text-lg ml-2 text-slate-800 font-medium">Learn</h6>
        </div>

        {/* description */}
        <h5 className="font-oxanium text-xl md:text-2xl lg:text-3xl font-semibold sm:font-bold pt-10 pb-3">
          Dynamic Epsilon Value
        </h5>
        <p className="">
          The Ramer-Douglas-Peucker algorithm's success depends on selecting an
          appropriate epsilon (ε) parameter. To ensure better results, a dynamic
          epsilon value, determined using Median Absolute Deviation (MAD),
          adapts the level of simplification to the dataset's characteristics.
        </p>

        {/* link */}
        <Link
          to="/dynamic-epsilon"
          className="flex group items-center h-[100px] transition-all ease-in-out duration-100 pt-8 text-purple-400 hover:font-semibold hover:cursor-pointer"
        >
          <button className="transition-all ease-in-out duration-100 text-xl md:text-2xl lg:text-3xl border group-hover:p-3 border-purple-400 rounded-full p-2">
            <FiArrowUpRight />
          </button>
          <h6 className="font-oxanium text-lg md:text-xl pl-3 md:px-4">
            Learn More
          </h6>
        </Link>
      </div>

      {/* sub boxes */}
      <div className="font-oxanium flex my-5 sm:my-0 sm:flex-col sm:w-56 md:w-72 lg:w-80 xl:w-[380px] sm:flex-shrink-0">
        <div className="flex-1 sm:w-full flex flex-col justify-center text-center py-6 px-5 md:px-8 lg:px-10 bg-white rounded-3xl border border-slate-700 mr-4 sm:mr-0">
          <h6 className="text-2xl sm:text-3xl lg:text-4xl leading-snug sm:leading-snug md:leading-normal lg:leading-normal xl:leading-snug text-center sm:text-left">
            Can process more than{" "}
            <span className="font-bold text-indigo-700">400,000+</span> points
            in <span className="font-bold text-slate-800">half the time</span>.
          </h6>
        </div>
      </div>
    </div>
  );
};
