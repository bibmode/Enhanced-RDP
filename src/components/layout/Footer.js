import React from "react";
import Research from "../sections/Research";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Research */}
      <Research />

      <div className="max-w-5xl px-7 xl:px-0 xl:max-w-6xl container">
        {/* Contact */}
        <section
          id="contact-section"
          className="py-10 sm:py-14 lg:py-20 px-8 sm:px-10 md:px-16 my-20 mt-20 md:mt-24 lg:mt-28 mb-24 bg-white rounded-3xl sm:rounded-full border border-slate-600"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start mx-auto text-center md:text-left max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h2 className="font-oxanium text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] lg:leading-snug sm:self-start font-bold sm:mb-4 md:mb-0 md:flex-1">
              Have any questions? Let’s discuss.
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-start md:flex-1 md:pl-4">
              <p className="text-sm sm:text-base lg:text-lg mt-2 md:mt-0 mb-8 sm:mb-0 sm:mr-5 sm:text-left">
                You can use these example csv files to test the Time Series Line
                Simplification.
              </p>

              {/* contact button */}
              <a
                href="mailto:vievenavales@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-700 hover:bg-indigo-800 px-5 py-2 sm:py-3 sm:px-7 rounded-full text-white font-oxanium flex sm:flex-shrink-0 items-center text-xl md:mt-4 lg:mt-6"
              >
                <HiOutlineMail />
                <h3 className="font-semibold ml-3 text-base lg:text-lg">
                  Contact Me
                </h3>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-6 md:flex md:items-start md:mt-36 md:pb-16">
          {/* logo */}
          <img
            className="w-28 lg:w-32 mx-auto sm:mx-0 md:pr-4 md:mr-auto mt-2"
            src="./images/e-rdp-logo.svg"
            alt="logo"
          />

          <div className="flex justify-between text-sm sm:text-base my-10 md:my-0 text-slate-500">
            {/* copyright */}
            <div className="pr-4 sm:max-w-md lg:max-w-lg xl:max-w-xl sm:mr-4">
              <p className="pb-6">
                You can use these example csv files to test the Time Series Line
                Simplification generator above. Each of these are time series
                datasets sourced from kaggle.com.{" "}
              </p>
              <p>© Copyright 2023. Website built by Genevieve Navales.</p>
            </div>

            {/* links */}
            <ul className="min-w-max mr-8">
              <li className="mb-3 hover:text-indigo-700">
                <Link to="/">Generator</Link>
              </li>
              <li className="mb-3 hover:text-indigo-700">
                <a
                  href="https://drive.google.com/file/d/1RIxFvHSZM_9frW43NBJRY8FFfti2pH-S/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research
                </a>
              </li>
              <li className="mb-3 hover:text-indigo-700">
                <Link to="/cpu-parallelism">CPU Parallelism</Link>
              </li>
              <li className=" hover:text-indigo-700">
                <Link to="/dynamic-epsilon">Dynamic Epsilon</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
