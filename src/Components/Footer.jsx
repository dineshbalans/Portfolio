import React from "react";
import logo from "../assets/img/logos/footerlogo.svg";
import { Socials } from "./Socials";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="bg-primary py-12 "
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between  text-center">
          <img src={logo} alt="" className="scale-75 lg:scale-100 lg:w-1/4" />
          <div className="flex  space-x-6">
            <Socials />
          </div>
          <p className="">&copy; 2023 Dinesh Balan S . All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};
