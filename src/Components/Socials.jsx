import React from "react";
import { social } from "../data";

export const Socials = () => {
  return (
    <ul className="flex space-x-9">
      {social.map((item, index) => (
        <li
          key={index}
          className={`flex items-center scale-150 hover:scale-125 duration-300 ${
            item.color ? item.color : "text-white"
          } ${item.colorHover ? item.colorHover : "hover:text-red-500"}`}
        >
          <a href={item.href} className="text-base">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
