import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

// icons
import { GiMaterialsScience } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

const Research = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section
      id="research-section"
      className="bg-indigo-800 py-10 sm:py-16 lg:py-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
          margin: "0px 100px -50px 0px",
        }}
        className="max-w-5xl px-7 xl:px-0 xl:max-w-6xl container text-white relative"
      >
        {/* animated gif */}
        <motion.div
          variants={item}
          className="absolute -z-1 w-[430px] sm:w-[520px] md:w-[550px] lg:w-[580px] xl:w-[600px] -top-[180px] sm:-top-1/4 lg:-top-[80px] -right-44 md:-right-36 lg:-right-20 "
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/bb9d4dae-aefb-42b3-8046-15ffdb0b227a/L5utZObCOh.json"
            style={{ height: "100%", width: "100%" }}
            background="transparent"
            direction="1"
            mode="normal"
            speed="1"
          ></Player>
        </motion.div>

        <motion.div
          variants={item}
          className="max-w-sm md:max-w-lg md:pr-16 lg:pr-0 lg:max-w-xl"
        >
          {/* research tag */}
          <div className="flex items-center text-3xl text-indigo-600 rounded-full pl-5 pr-6 py-2 bg-cyan-200 w-fit">
            <GiMaterialsScience />
            <h6 className="text-lg ml-2 text-slate-800 font-medium">
              Research
            </h6>
          </div>

          {/* description */}
          <h5 className="font-oxanium text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-snug lg:leading-tight font-semibold pt-20 sm:pt-12 pb-3">
            Read the Research Paper Behind this Technology
          </h5>
          <p className="text-white lg:text-lg">
            You can use these example csv files to test the Time Series Line
            Simplification generator above. Each of these are time series
            datasets sourced from kaggle.com.
          </p>

          {/* link */}
          <a
            href="https://drive.google.com/file/d/11mAPgrB04am47k5e7QxNAtHRAr3rnSFY/view"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[62px] flex items-center mt-8 md:mt-16 text-cyan-200 hover:font-semibold transition-all ease-in-out duration-100 group hover:cursor-pointer"
          >
            <div className=" transition-all ease-in-out duration-100 group-hover:p-3 text-xl sm:text-3xl lg:text-4xl border border-cyan-200 rounded-full p-2">
              <FiArrowUpRight />
            </div>
            <h6 className="font-oxanium text-lg lg:text-2xl sm:text-xl pl-3 lg:pl-6">
              Open PDF
            </h6>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;
