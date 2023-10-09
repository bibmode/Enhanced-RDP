import React from "react";
import { motion } from "framer-motion";

// Icons
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaPuzzlePiece } from "react-icons/fa6";
import { Player } from "@lottiefiles/react-lottie-player";

const ERDPInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, staggerChildren: 0.8 }}
      viewport={{
        once: true,
        margin: "0px 100px -50px 0px",
      }}
    >
      <motion.h2 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl xl:leading-snug font-oxanium font-semibold text-center md:text-left md:max-w-md xl:max-w-3xl pb-6">
        Enhanced Ramer-Douglas-Peucker Algorithm
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.8, delayChildren: 0.5 }}
        viewport={{
          once: true,
          margin: "0px 100px -50px 0px",
        }}
        className="flex flex-col items-center md:flex-row"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.8, delayChildren: 0.5 }}
          className="relative h-80 sm:h-96 lg:h-[480px] xl:h-[580px] w-80 sm:w-96 lg:w-[480px] xl:w-[580px] md:mr-6 flex flex-col flex-shrink-0 items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute h-full w-full p-6 xl:p-12"
          >
            <div className="bg-yellow-100 rounded-full h-full w-full" />
          </motion.div>
          <div className="absolute w-full h-full xl:p-5">
            <Player
              autoplay
              loop
              src="https://lottie.host/c34d9c8e-46af-4d98-933a-6c6a50c1fc33/uQQOrq3O30.json"
              style={{ height: "100%", width: "100%" }}
              background="transparent"
              direction="1"
              mode="normal"
              speed="1"
            ></Player>
          </div>
        </motion.div>

        <div>
          {/* description */}
          <div className="mt-8 mb-7 sm:mb-0 sm:flex md:flex-col">
            <p className="mb-7 mr-4 flex-1">
              The RDP algorithm simplifies lines and time series by preserving
              essential properties and reducing complexity. Large datasets, with
              numerous redundant points, pose challenges for the classic RDP
              approach.
            </p>
            <p className="md:mb-7 flex-1">
              The Enhanced Ramer-Douglas-Peucker algorithm tackles these issues
              by employing parallel computing and dynamic epsilon adjustments
              based on dataset characteristics.
            </p>
          </div>

          {/* boxes */}
          <div className="flex w-full">
            <div className="bg-white rounded-3xl border border-slate-600 px-5 py-6 mr-5 flex flex-col sm:flex-row md:flex-col justify-between sm:justify-start md:justify-between sm:items-center md:items-start flex-1 lg:max-w-[200px]">
              <h4 className="text-5xl pb-5 sm:pb-0 md:pb-5 sm:mr-3 text-indigo-700">
                <HiMiniCpuChip />
              </h4>
              <h4 className="text-md md:text-lg lg:text-2xl font-oxanium font-bold">
                CPU Optimized
              </h4>
            </div>
            <div className="bg-white rounded-3xl border border-slate-600 px-5 py-6 flex flex-col sm:flex-row md:flex-col justify-between sm:justify-start md:justify-between sm:items-center md:items-start flex-1 lg:max-w-[200px]">
              <h4 className="text-[45px] text-indigo-700 sm:pb-1 sm:mr-3">
                <FaPuzzlePiece />
              </h4>
              <h4 className="text-md md:text-lg lg:text-2xl font-oxanium font-bold">
                Dynamic Epsilon Value
              </h4>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ERDPInfo;
