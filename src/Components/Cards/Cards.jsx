// import React from "react";
// import "./Cards.css";
// import { FaHeadset } from "react-icons/fa";

// const Cards = () => {
//   return (
//     <section className="flex justify-center items-center gap-10 py-24">
//       <div
//         data-aos="zoom-in-down"
//         className="bg-[#071952] w-[25%] flex flex-col rounded-lg px-8 py-4 text-white"
//       >
//         <div className="flex items-center justify-between w-[100%]  py-4">
//           <div className="text-2xl leading-8 font-semibold">BPO</div>
//           <FaHeadset size={45} color="#fff" />
//         </div>
//         <p className="font-normal text-lg ">
//           Our comprehensive customer experience platform seamlessly integrates
//           strategy, analytics, technology, and operations. This end-to-end
//           service is designed to enhance every touchpoint of the customer
//           journey.
//         </p>
//       </div>
//       <div
//         data-aos="zoom-in-down"
//         className="bg-[#071952] w-[25%] flex flex-col rounded-lg px-8 py-4 text-white"
//       >
//         <div className="flex items-center justify-between w-[100%] py-4">
//           <div className="text-2xl leading-8 font-semibold">Accounting</div>
//           <FaHeadset size={45} color="#fff" />
//         </div>
//         <p className="font-normal text-lg ">
//           Accounting Outsourcing Services provide comprehensive financial
//           solutions, ensuring accuracy, compliance, and timely reporting. We
//           handle everything from bookkeeping to tax preparation, so you can
//           focus on core tasks.
//         </p>
//       </div>
//       <div
//         data-aos="zoom-in-down"
//         className="bg-[#071952] w-[25%] flex flex-col rounded-lg px-8 py-4 text-white  "
//       >
//         <div className="flex items-center justify-between w-[100%] py-4">
//           <div className="text-2xl leading-8 font-semibold">Tech Support</div>
//           <FaHeadset size={45} color="#fff" />
//         </div>
//         <p className="font-normal text-lg ">
//           Technical Support is committed to providing prompt and efficient
//           solutions to technical issues. Our team is skilled in troubleshooting,
//           software assistance, and hardware support, ensuring smooth operation
//           of products or services.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Cards;

import React from "react";
import { FaHeadset } from "react-icons/fa";

const Cards = () => {
  return (
    <section className="flex flex-wrap justify-center items-stretch gap-10 py-24">
      <div
        data-aos="zoom-in-down"
        className="bg-[#071952] flex flex-col rounded-lg px-8 py-4 text-white w-full md:w-[45%] lg:w-[30%]"
      >
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl leading-8 font-semibold">BPO</div>
          <FaHeadset size={45} color="#fff" />
        </div>
        <p className="font-normal text-lg flex-grow">
          Our comprehensive customer experience platform seamlessly integrates
          strategy, analytics, technology, and operations. This end-to-end
          service is designed to enhance every touchpoint of the customer
          journey.
        </p>
      </div>
      <div
        data-aos="zoom-in-down"
        className="bg-[#071952] flex flex-col rounded-lg px-8 py-4 text-white w-full md:w-[45%] lg:w-[30%]"
      >
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl leading-8 font-semibold">Accounting</div>
          <FaHeadset size={45} color="#fff" />
        </div>
        <p className="font-normal text-lg flex-grow">
          Accounting Outsourcing Services provide comprehensive financial
          solutions, ensuring accuracy, compliance, and timely reporting. We
          handle everything from bookkeeping to tax preparation, so you can
          focus on core tasks.
        </p>
      </div>
      <div
        data-aos="zoom-in-down"
        className="bg-[#071952] flex flex-col rounded-lg px-8 py-4 text-white w-full md:w-[45%] lg:w-[30%]"
      >
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl leading-8 font-semibold">Tech Support</div>
          <FaHeadset size={45} color="#fff" />
        </div>
        <p className="font-normal text-lg flex-grow">
          Technical Support is committed to providing prompt and efficient
          solutions to technical issues. Our team is skilled in troubleshooting,
          software assistance, and hardware support, ensuring smooth operation
          of products or services.
        </p>
      </div>
    </section>
  );
};

export default Cards;
