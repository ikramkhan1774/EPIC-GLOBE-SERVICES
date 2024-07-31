import React from "react";
import MapComponent from "../Mapcomponent/Mapcomponent";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-between h-auto md:h-[70vh]">
      <div className="w-full py-10 md:py-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
        <div className="w-full md:w-[60%] px-4">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 h-auto md:h-[40vh]">
            <div className="w-full md:w-2/4 px-2 md:px-6 flex flex-col gap-5">
              <h4 className="text-2xl font-bold text-[#071952]">
                Epic Globe Services
              </h4>
              <div>
                <h4 className="text-xl font-bold text-[#071952]">Call Us</h4>
                <div className="text-[#071952]">+92 300 000000</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#071952]">Email Us</h4>
                <div className="text-[#071952]">
                  <a href="mailto:epicglobeservices@gmail.com">
                    admin@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 px-2 md:px-6 flex flex-col gap-5">
              <div>
                <h4 className="text-xl font-bold text-[#071952]">
                  Business Hours
                </h4>
                <div>
                  <p className="text-[#071952]">
                    Monday to Friday : 09.00 – 06.00
                  </p>
                  <p className="text-[#071952]">Saturday, Sunday : Closed</p>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="text-xl font-bold text-[#071952]">Address</h4>
                </div>
                <div>
                  <p className="text-[#071952]">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-[300px] md:h-[40vh]">
          <MapComponent />
        </div>
      </div>
      <div className="w-full py-6 bg-[#e9e9e9] flex justify-center items-center">
        <p className="text-[#071952] text-base md:text-sm ">
          Copyright © 2024 Epic Globe Services | Powered by Epic Globe Services
        </p>
      </div>
    </section>
  );
};

export default Footer;
