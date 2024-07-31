import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center gap-16 w-full py-8"
    >
      <div className="w-full my-8 text-center">
        <div className="text-[#071952] text-3xl md:text-5xl font-bold my-3">
          Our Services
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div
            data-aos="fade-up"
            className="inbound w-full md:w-1/3 h-80 flex flex-col justify-center items-center relative bg-cover bg-center"
          >
            <div className="w-full h-full bg-[#071952] opacity-70 absolute"></div>
            <h5 className="w-4/5 z-10 text-2xl md:text-3xl font-bold text-white">
              Inbound Customer Service
            </h5>
            <p className="w-4/5 z-10 font-medium text-md text-white text-center">
              Handling calls from customers who need assistance with a product
              or service.
            </p>
          </div>
          <div
            data-aos="fade-down"
            className="chat w-full md:w-1/3 h-80 flex flex-col justify-center items-center relative bg-cover bg-center"
          >
            <div className="w-full h-full bg-[#071952] opacity-60 absolute"></div>
            <h5 className="w-4/5 z-10 text-2xl md:text-3xl font-bold text-white">
              Inbound Chat & Email Support
            </h5>
            <p className="w-4/5 z-10 font-medium text-md text-white text-center">
              Handling your customer queries over the chat and emails so you
              don't have to.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="outbound w-full md:w-1/3 h-80 flex flex-col justify-center items-center relative bg-cover bg-center"
          >
            <div className="w-full h-full bg-[#071952] opacity-60 absolute"></div>
            <h5 className="w-4/5 z-10 text-2xl md:text-3xl font-bold text-white">
              Outbound Lead Generation & QA
            </h5>
            <p className="w-4/5 z-10 font-medium text-md text-white text-center">
              Generating high quality leads for insurance of private limited
              companies.
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="bg-[#071952] w-full md:w-11/12 lg:w-4/5 h-auto py-16 px-6 "
      >
        <div className="w-full flex flex-col md:flex-row justify-center items-center px-8">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
            <h4 className="text-2xl md:text-4xl text-white font-bold py-5 md:py-10">
              EPIC Globe Advantages
            </h4>
            <ol className="list-disc text-white space-y-4">
              <li className="text-lg font-normal">
                End-to-end services and robust platforms to support outsourced
                services.
              </li>
              <li className="text-lg font-normal">
                Cut down your operations cost by as much as 50%.
              </li>
              <li className="text-lg font-normal">
                Access to expert talent pool.
              </li>
              <li className="text-lg font-normal">
                Scalability and agility to meet your business needs.
              </li>
              <li className="text-lg font-normal">
                Turn your fixed overhead costs to operational costs.
              </li>
            </ol>
          </div>
          <div className="meeting w-full md:w-[550px] h-64 md:h-[400px] mt-16 md:mt-0 bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
