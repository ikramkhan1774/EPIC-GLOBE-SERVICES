import React from "react";
import "./Customers.css";

const Customers = () => {
  return (
    <div className="w-full h-auto py-16">
      <div className="flex justify-center items-center text-[#071952] text-3xl md:text-4xl font-bold mb-8">
        <h3 className="text-center">What Our Customers Say About Us</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-8 md:gap-16 w-full px-4">
        <div
          data-aos="fade-right"

          className="w-full md:w-1/3 h-auto bg-white p-6 shadow-md rounded-md"
        >
          <ul className="flex justify-start items-center text-[#071952] mb-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="text-base font-normal text-[#088395] leading-8 mb-6">
            Epic Globe Services has been instrumental in streamlining our
            customer support operations. We've seen a significant improvement in
            customer satisfaction since partnering with Epic Globe Services.
          </p>
          <div className="flex justify-start items-center gap-4 font-bold">
            <div className="martin w-16 h-16 rounded-full bg-gray-300"></div>
            <p className="text-[#071952]">Martin Foster</p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="w-full md:w-1/3 h-auto bg-white p-6 shadow-md rounded-md"
        >
          <ul className="flex justify-start items-center text-[#071952] mb-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="text-base font-normal text-[#088395] leading-8 mb-6">
            We rely on Epic Globe Services for our inbound chat and email
            support, and they have exceeded our expectations. Their team is
            adept at handling inquiries promptly, while maintaining a high level
            of professionalism.
          </p>
          <div className="flex justify-start items-center gap-4 font-bold">
            <div className="bryan w-16 h-16 rounded-full bg-gray-300"></div>
            <p className="text-[#071952]">Bryan Cirius</p>
          </div>
        </div>
        <div
          // data-aos="fade-left"
          data-aos="fade-up"

          className="w-full md:w-1/3 h-auto bg-white p-6 shadow-md rounded-md"
        >
          <ul className="flex justify-start items-center text-[#071952] mb-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="text-base font-normal text-[#088395] leading-8 mb-6">
            Epic Globe Services has been a valuable partner with outbound lead
            generation. Their team is skilled at identifying and engaging with
            potential leads, resulting in a stream of qualified prospects for
            our business.
          </p>
          <div className="flex justify-start items-center gap-4 font-bold">
            <div className="jane w-16 h-16 rounded-full bg-gray-300"></div>
            <p className="text-[#071952]">Jane Dowser</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
