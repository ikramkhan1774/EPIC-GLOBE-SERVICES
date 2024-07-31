import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-evenly items-center py-16 md:py-32 bg-[#f3f7ff]">
      <div
        id="aboutImage"
        data-aos="fade-right"
        className="icon w-full md:w-[500px] h-[550px] md:h-[500px] mb-8 md:mb-0"
      ></div>
      <div className="w-full md:w-[35%] flex flex-col items-start justify-center gap-6 md:gap-10 px-4 md:px-0">
        <h3
          data-aos="fade-down"
          className="text-[#071952] text-3xl md:text-5xl leading-relaxed md:leading-[54px] font-bold"
        >
          Holistic Customer Experience Solutions
        </h3>
        <p
          data-aos="fade-up"
          className="text-base md:text-lg font-normal text-[#088395] leading-6 md:leading-7"
        >
          Epic Globe Services places utmost importance on client satisfaction
          and a positive work culture. Our commitment to excellence ensures 100%
          client satisfaction, as evidenced by testimonials from delighted
          clients. We prioritize fostering a positive company culture that
          motivates our dedicated employees to achieve our objectives.
          Leveraging our extensive expertise and diverse global workforce, we
          excel in resolving a wide range of business challenges with unmatched
          professionalism.
        </p>
        <a href="#navbar" >
          <button
            data-aos="fade-down"
            className="bg-[#071952] text-white p-3 flex justify-center items-center text-base rounded-md transition ease-in-out delay-100 hover:text-[#071952] hover:outline hover:outline-[#071952] hover:bg-transparent"
          >
            Know More About Us <BiRightArrowAlt size={30} />
          </button>
        </a>
      </div>
    </section>
  );
}

export default AboutUs;
