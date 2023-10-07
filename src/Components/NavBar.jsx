import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

// xs: "320px",
// sm: "375px",
// sml: "500px",
// md: "667px",
// mdl: "768px",
// lg: "960px",
// lgl: "1024px",
// xl: "1280px",
// 2xl: "1536px"

export const NavBar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-5 capitalize text-[15px] ">
        {navigation.map((item, index) => (
          <li
            key={index}
            className="text-white hover:text-fuchsia-950 cursor-pointer px-2 rounded hover:bg-fuchsia-500 duration-200"
          >
            <Link
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
    </nav>
  );
};
