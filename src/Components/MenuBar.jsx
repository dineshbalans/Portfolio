import { motion } from "framer-motion";
import React from "react";
import { navigation } from "../data";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import menuBarLogo from "../assets/img/logos/menubarlogo.svg";
import heroImg from "../assets/img/img/heroimg.jpeg";
import { Socials } from "./Socials";

const MenuBar = ({ menuBarCross, menuBarVisibilityHandler }) => {
  return (
    <menu className="lg:hidden  h-full flex items-center">
      <button onClick={menuBarVisibilityHandler}>
        {menuBarCross ? (
          <AiOutlineClose className="scale-150" />
        ) : (
          <SlMenu className="scale-150" />
        )}
      </button>
    </menu>
  );
};

export default MenuBar;

export const MenuBarBody = ({ menuBarVisibilityHandler }) => {
  return (
    <motion.div
      className="bg-[#0c1125] p-2 fixed z-50 h-[90vh] w-[60vw] lg:hidden"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-8 py-2 relative text-white ">
        <div>
          <img
            className="w-32 scale-150 mx-auto mb-2"
            src={menuBarLogo}
            alt="logo"
          />
          <div className="w-[50%] mx-auto py-5 hidden sml:block">
            <img
              src={heroImg}
              alt=""
              className="rounded-full drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]"
            />
          </div>
          <p className="text-sm  mt-2 px-2">
            Welcome to my portfolio — a digital canvas that encapsulates my
            journey as a Java Full Stack Developer.Let's connect, collaborate,
            and create together."
          </p>
        </div>
        <ul className="flex flex-col gap-4 items-center capitalize">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="text-base font-normal  tracking-wide cursor-pointer hover:text-fuchsia-500 duration-300"
            >
              <Link
                onClick={menuBarVisibilityHandler}
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="">
            <Socials />
          </div>
        </div>
        <span
          onClick={() => setShowMenu(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
        ></span>
      </div>
    </motion.div>
  );
};
