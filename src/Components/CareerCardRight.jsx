import React from "react";
import { motion } from "framer-motion";

const CareerCardRight = ({ title, subTitle, result, des }) => {
  return (
    <>
      <motion.div
        className="w-full group flex mb-6 lgl:mb-0 cursor-pointer"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className=" h-[6px] bgOpacity mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-[33px] flex justify-center items-center bg-white group-hover:bg-fuchsia-800 ">
            <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-fuchsia-800 duration-300 "></span>
          </span>
          <span className="border-2 absolute -left-[13px] w-3 " />
        </div>
        <div className="w-full bg-black  hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:py-8 lgl:px-10 flex flex-col justify-center gap-6">
          <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                {title}
              </h3>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                {subTitle}
              </p>
            </div>
            <div>
              <p className="px-4 py-2 text-fuchsia-500 bg-black bg-opacity-25 rounded-lg flex justify-center items-center lgl:shadow-shadowOne text-sm font-medium">
                {result}
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 text-justify lg:text-left">
            {des}
          </p>
        </div>
      </motion.div>
      <div className="h-1/3 hidden lgl:block" />
    </>
  );
};

export default CareerCardRight;
