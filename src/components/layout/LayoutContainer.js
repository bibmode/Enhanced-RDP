import React from "react";
import Footer from "./Footer";
import { ScrollRestoration, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { FaArrowUp } from "react-icons/fa";
import { scrollToSection } from "../../utils/helpers";

const LayoutContainer = ({ children }) => {
  const location = useLocation();
  return (
    <div
      className={`font-sans min-h-screen relative bg-indigo-50 ${
        location.pathname === "/" || location.pathname === "/results"
          ? "overflow-x-hidden"
          : ""
      }`}
    >
      <ScrollRestoration />

      <div
        id="navbar-section"
        className="max-w-5xl px-7 xl:px-0 xl:max-w-6xl container text-gray-800"
      >
        {/* navigation bar */}
        <NavigationBar />
        {children}
      </div>

      {/* footer */}
      <Footer />

      {/* scroll top */}
      <button
        onClick={() => scrollToSection("navbar-section")}
        className="rounded-full bg-indigo-700 hover:bg-indigo-800 text-white shadow-md text-2xl p-5 fixed bottom-5 sm:bottom-8 lg:bottom-10 xl:bottom-12 right-5 sm:right-8 lg:right-10 xl:right-12"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default LayoutContainer;
