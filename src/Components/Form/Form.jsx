

import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const addPartner = (data) => {
    console.log(data);
    axios.post("/routes/addPartner", data).then((resp) => {
      if (resp.data.success) {
        toast.success("Submission Successful!");
      }
    });
    reset()
  };

  return (
    <div
      onSubmit={handleSubmit(addPartner)}
      className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#071952] w-full h-auto md:h-[70vh] py-8 md:py-0 px-4 md:px-0"
    >
      <div className="w-full md:w-[40%] text-center md:text-left">
        <h2
          data-aos="fade-up"
          className="text-white text-3xl md:text-5xl font-bold py-4"
        >
          Let's Work Together
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg text-[#cdc6c2] w-full md:w-[80%] mx-auto md:mx-0"
        >
          Have an idea that needs to be out there? or a rocking project that
          needs to be polished? Contact Now!
        </p>
        <a href="#navbar">
          <button
            data-aos="fade-up"
            className="flex justify-center items-center font-medium rounded py-3 px-6 gap-2 mt-8 md:mt-16 bg-white text-[#071952] transition ease-in-out delay-100 hover:text-white hover:outline hover:outline-white hover:bg-transparent mx-auto md:mx-0"
          >
            Fill Out The Form <BiRightArrowAlt size={25} />
          </button>
        </a>
      </div>
      <div className="w-full md:w-[40%] h-full">
        <form className="w-full h-full flex justify-center items-center flex-col bg-[#0c1f59] p-4 md:p-0 gap-4">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="rounded-md bg-[#071952] h-[40px] w-full md:w-[80%] ps-2 py-2 border-b-2 border-[#a69db5] text-white focus:outline-none placeholder:font-semibold"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="rounded-md bg-[#071952] h-[40px] w-full md:w-[80%] ps-2 py-2 border-b-2 border-[#a69db5] text-white focus:outline-none placeholder:font-semibold"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="rounded-md bg-[#071952] h-[100px] w-full md:w-[80%] ps-2 pt-2 border-b-2 border-[#a69db5] text-white focus:outline-none placeholder:font-semibold"
          />
          <button
            type="submit"
            className="w-full md:w-[80%] h-[50px] text-[#071952] bg-white font-semibold py-3 rounded-md transition ease-in-out hover:text-white hover:outline hover:outline-white hover:bg-transparent"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
