import React from "react";

export const ArrowSection = () => {
  return (
    <section className="bg-primary flex items-center justify-center text-white w-full pt-28 pb-10 sml:p-0">
      <svg
        width="60"
        height="30"
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L30 28L58 2"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4"
        />
      </svg>
    </section>
  );
};
