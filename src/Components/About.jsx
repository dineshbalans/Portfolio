import { motion } from "framer-motion";
import React from "react";
import meme from "../assets/img/img/meme.jpg";

export const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col lgl:flex-row gap-16 xl:gap-24">
          <div className="w-full lgl:w-1/2 flex items-center justify-center mx-auto">
            <img src={meme} alt="" className="h-full object-cover scale-95" />
          </div>
          <motion.div
            className="flex flex-col items-center lg:items-start lg:text-left w-full lgl:w-1/2"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            <div className="flex flex-col text-center sml:text-left">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Dinesh Balan
              </h2>
              <p className="mb-4 text-accent">Full Stack Developer</p>
              <div className="h-1 w-72 bg-fuchsia-500 mb-4 mx-auto sm:mx-0" />
              <p className="mb-8 text-justify lgl:text-left">
                Hello, I'm Dinesh Balan, a dedicated Java Full Stack Developer
                with a passion for creating robust and efficient web
                applications. I've had the
                privilege of working across the entire stack, from crafting
                responsive front-end interfaces to building scalable back-end
                systems.
                <br />I believe in the power of technology to drive innovation
                and enhance user experiences. My mission is to create seamless
                and intuitive web applications that empower businesses and
                utilize technology to solve complex problems and streamline
                processes.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1Av8P9p_Td-SKvOG0VBR1vXb8Bm1-Lk-e/view?usp=drive_link"
              target="_blank"
              rel="nonopener noreferrer"
            >
              <button className="btn btn-md w-[115px] bg-fuchsia-600 hover:bg-fuchsia-800">
                Resume
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
