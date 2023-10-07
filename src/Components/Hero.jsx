import React from "react";
import glasses from "../../src/assets/img/logos/glasses.svg";
import heroimage from "../../src/assets/img/img/heroimage.jpeg";
import { inviewHandler } from "../utils/animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Professional Coder.", "Tech Enthusiast."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inviewHandler(inView, animation)}>
      <section
        id="home"
        className="h-[100vh] bg-primary flex items-center w-full flex-col"
      >
        <div className="lg:container mx-auto h-full flex justify-center w-full">
          <motion.div
            className=" flex items-center justify-evenly"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={animation}
          >
            <div className="flex items-center ">
              <div className="hidden sml:block w-1  mr-8 h-96 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500" />
              <div className="flex flex-col items-center lg:items-start ">
                <div className="sml:hidden h-full flex items-center py-12">
                  <img src={heroimage} alt="" className="rounded-full" />
                </div>
                <div className="text-justify">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl pb-4 font-bold">
                    Hey, I'm{" "}
                    <span className="text-fuchsia-800">Dinesh Balan</span>
                  </h1>
                  <h2 className="xs:text-xl sm:text-2xl sml:text-3xl font-bold text-white pb-4 lg:text-left">
                    a <span>{text}</span>
                    <Cursor cursorStyle="|" cursorColor="#ff014f" />
                  </h2>
                  <p className="pb-4 max-w-[480px] text-lg text-justify sml:text-left">
                    Passionate developer with a strong love for creating
                    innovative and user-friendly digital experiences. I've had
                    the privilege of working on a diverse range of projects that
                    have honed my skills and fueled my enthusiasm for full stack
                    development.
                    <br />
                    <br />
                    Constantly Embracing new Techs and Jack of all Trades is
                    what I belive in
                  </p>
                  <img
                    src={glasses}
                    alt="glasses"
                    className="h-16 hidden md:block"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full hidden lg:block relative ">
              <div className=" h-full flex items-center">
                <img
                  src={heroimage}
                  alt=""
                  className="rounded-full drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </InView>
  );
};

// import { Canvas } from "@react-three/fiber";
// import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
// import { ArrowSection } from "./ArrowSection";

{
  /* <Canvas className="absolute inset-0">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.9} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={1}>
                  <MeshDistortMaterial
                    color="#86198F"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas> */
}
