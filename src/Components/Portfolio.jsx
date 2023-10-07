import React from "react";
import { inviewHandler } from "../utils/animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import ProjectsCard from "./ProjectCard";
import { projects } from "../data";

export const Portfolio = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inviewHandler(inView, animation)}>
      <section id="portfolio" className="section bg-primary min-h-[600px]">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animation}
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title">My Latest work 👨‍💻</h2>
            <p className="subtitle">
              Following is a short showcase of my projects 
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center p-2">
            {projects.map(({ id, title, src, desc, github, live }) => (
              <ProjectsCard
                key={id}
                title={title}
                src={src}
                des={desc}
                git={github}
                live={live}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </InView>
  );
};
