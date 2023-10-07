import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavBar } from "../Components/NavBar";
import { Socials } from "../Components/Socials";
import logo from "../assets/img/logos/headerlogo.svg";
import glasses from "../assets/img/logos/glasses.svg";
import MenuBar, { MenuBarBody } from "./MenuBar";

export const Header = () => {
  const [menuBarIsVisible, setMenuBarIsVisible] = useState(false);

  const menuBarVisibilityHandler = () => {
    setMenuBarIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <motion.header
        className="h-20 w-full flex items-center sticky top-0 z-10 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="px-8 lg:px-0 container mx-auto h-full flex items-center justify-between lg:justify-around">
          <img
            src={logo}
            className="w-1/4 hidden md:block"
            alt=""
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
          />
          <img src={glasses} className="w-1/4 block md:hidden" alt="" />
          <NavBar />
          <MenuBar
            menuBarCross={menuBarIsVisible}
            menuBarVisibilityHandler={menuBarVisibilityHandler}
          />
          <div className="hidden lg:block">
            <Socials />
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {menuBarIsVisible && (
          <MenuBarBody menuBarVisibilityHandler={menuBarVisibilityHandler} />
        )}
      </AnimatePresence>
    </>
  );
};
