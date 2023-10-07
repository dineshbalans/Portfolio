import React from "react";
import { inviewHandler } from "../utils/animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { skills } from "../data";

export const Skills = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inviewHandler(inView, animation)}>
      <section id="skills" className="h-76 bg-primary py-12 ">
        <motion.div
          className="container mx-auto "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animation}
        >
          <div className="flex flex-col items-center pb-9">
            <h2 className="section-title">Tech Stack 🔥</h2>
            <p className="text-center">
              These are the few Technologies , languages and frameworks that i
              grind on a regular basis..
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div
                className="w-1/2 sml:w-1/3 md:w-1/4 mdl:w-1/5 lgl:w-1/6 px-6 max-h-xs py-5 sml:py-4 lgl:py-3 text-primary hover:text-white cursor-pointer hover:scale-120 duration-200 hover:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                key={index}
              >
                <img
                  src={skill.image}
                  alt=""
                  className="mx-auto hover:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                />
                <div className="pt-2 text-center">{skill.text}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </InView>
  );
};
