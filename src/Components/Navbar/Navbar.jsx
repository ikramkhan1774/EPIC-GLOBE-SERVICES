import React from "react";
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import Services from "../Services/Services";

const Navbar = () => {
  return (
    <header
      id="navbar"
      className="h-auto min-h-[70vh] bg-[#071952] text-white flex flex-col items-center justify-between"
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-20 py-5">
        <div className="text-xl md:text-2xl font-bold">EPIC GLOBE SERVICES</div>
        <a
          href="#"
          className="bg-white text-[#0f57fb] rounded-full p-2"
        >
          <FaPhoneAlt size={18} />
        </a>
      </nav>
      <div className="flex flex-col md:flex-row md:h-[90%] items-center mb-[200px] justify-center gap-16 px-6 md:px-20">
        <div className="w-full md:w-1/2 order-2 md:order-1 ">
          <h3
            data-aos="fade-up"
            className="font-semibold text-3xl md:text-5xl lg:text-6xl leading-relaxed py-4"
          >
            Elevate Your Projects Empower Your Dreams
          </h3>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl text-white opacity-75 font-normal py-7"
          >
            Simplify your business with Epic Globe Services. Our customized
            services make running customer support, accounting, finance, and IT
            efficient so you can focus on what matters.
          </p>
          <a href="#services">
            <button
              data-aos="fade-up"
              className="flex justify-center items-center text-lg font-medium text-[#071952] px-6 py-3 rounded mb-4 bg-white gap-3 transition ease-in-out delay-100 hover:text-white hover:outline hover:outline-white hover:bg-transparent"
            >
              Our services <BiRightArrowAlt size={25} />
            </button>
          </a>
        </div>
        <div className="w-full md:w-[500px] h-96 md:h-[90%] order-1 md:order-2">
          <div id="headerImage" className="bg-cover bg-center h-[400px] "></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
