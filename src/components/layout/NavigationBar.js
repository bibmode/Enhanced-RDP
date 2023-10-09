import React, { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../../utils/helpers";
import { Link, useNavigate } from "react-router-dom";

// icons
import { HiMenu, HiOutlineMail, HiOutlineX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { FaCaretRight } from "react-icons/fa";

function NavigationBar() {
  const [openTechnologies, setOpenTechnologies] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const technologiesRef = useRef();

  const handleDropdown = () => {
    openTechnologies ? setOpenTechnologies(false) : setOpenTechnologies(true);
  };

  const handleDrawer = () => {
    openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
  };

  const handleOutsideClick = (e) => {
    if (
      technologiesRef.current &&
      !technologiesRef.current.contains(e.target)
    ) {
      setOpenTechnologies(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <>
      {/* smaller screen nav bar */}
      <nav className="flex lg:hidden items-center py-8">
        <div className="relative z-10 flex-grow flex justify-center ml-[30px] mt-1">
          <img src="/images/e-rdp-logo.png" alt="E-RDP Logo" className="h-5" />
        </div>
        {openDrawer ? (
          <button
            onClick={handleDrawer}
            type="button"
            className="relative z-10 flex-none text-3xl text-gray-900"
          >
            <HiOutlineX />
          </button>
        ) : (
          <button
            onClick={handleDrawer}
            type="button"
            className="relative z-10 flex-none text-3xl text-gray-900"
          >
            <HiMenu />
          </button>
        )}

        {openDrawer && (
          <div
            onClick={() => setOpenDrawer(false)}
            className="z-0 pt-20 pb-8 absolute top-0 left-0 bg-white w-full shadow-lg"
          >
            <ul className="px-7">
              <Link to="/">
                <li className="py-2 hover:text-indigo-600 hover:font-semibold">
                  Home
                </li>
              </Link>
              <li className="py-2">Technologies</li>
              <ul className="ml-8">
                <Link to="/cpu-parallelism">
                  <li className="py-2 flex items-center hover:text-indigo-600 hover:font-semibold">
                    <div className="mr-1">
                      <FaCaretRight />
                    </div>
                    CPU Parallelism
                  </li>
                </Link>
                <Link to="/dynamic-epsilon">
                  <li className="py-2 flex items-center hover:text-indigo-600 hover:font-semibold">
                    <div className="mr-1">
                      <FaCaretRight />
                    </div>
                    Dynamic Epsilon
                  </li>
                </Link>
                <Link to="/classic-rdp">
                  <li className="py-2 flex items-center hover:text-indigo-600 hover:font-semibold">
                    <div className="mr-1">
                      <FaCaretRight />
                    </div>
                    Classic RDP
                  </li>
                </Link>
              </ul>
              <li
                onClick={() => scrollToSection("research-section")}
                className="py-2 hover:text-indigo-600 hover:font-semibold"
              >
                Research
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* large screen nav bar */}
      <nav className="hidden lg:flex items-center justify-between pt-10 pb-9">
        {/* logo */}
        <div className="mt-1">
          <img src="/images/e-rdp-logo.png" alt="E-RDP Logo" className="h-7" />
        </div>

        {/* left menu*/}
        <ul className="flex items-center">
          <li className="w-11 mr-8 text-center text-slate-600 ">
            <button
              onClick={() => navigate("/")}
              className="hover:text-indigo-600 hover:font-medium"
            >
              Home
            </button>
          </li>

          <li
            ref={technologiesRef}
            className="w-[113px] mr-8 text-center text-slate-600 relative"
          >
            <button
              onClick={handleDropdown}
              onMouseOver={() => setOpenTechnologies(true)}
              className="hover:text-indigo-600 hover:font-medium flex items-center"
            >
              <h6>Technologies</h6>
              <div className="mt-[2px] ml-2">
                <FiChevronDown />
              </div>
            </button>
            {openTechnologies && (
              <div
                onMouseLeave={() => setOpenTechnologies(false)}
                className="absolute z-20 top-9 bg-white border border-slate-600 rounded-lg py-2 w-[160px]"
              >
                <ul className="flex flex-col items-start text-left">
                  <li className="px-4 py-2 w-full hover:text-indigo-600 hover:font-medium">
                    <button
                      onClick={() => navigate("/cpu-parallelism")}
                      className=""
                    >
                      CPU Parallelism
                    </button>
                  </li>
                  <li className="px-4 py-2 w-full hover:text-indigo-600 hover:font-medium">
                    <button
                      onClick={() => navigate("/dynamic-epsilon")}
                      className=""
                    >
                      Dynamic Epsilon
                    </button>
                  </li>
                  <li className="px-4 py-2 w-full hover:text-indigo-600 hover:font-medium">
                    <button
                      onClick={() => navigate("/classic-rdp")}
                      className=""
                    >
                      Classic RDP
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="w-[65px] mr-8 text-center text-slate-600">
            <button
              onClick={() => scrollToSection("research-section")}
              className="hover:text-indigo-600 hover:font-medium"
            >
              Research
            </button>
          </li>
          <button
            onClick={() => scrollToSection("contact-section")}
            className="bg-indigo-700 hover:bg-indigo-800 px-5 py-2 rounded-full text-white font-oxanium flex items-center text-xl"
          >
            <HiOutlineMail />
            <h3 className="font-semibold ml-3 text-base">Contact</h3>
          </button>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
