import React from "react";
import CareerCardRight from "./CareerCardRight";
import CareerCardLeft from "./CareerCardLeft";
import { careers } from "../data";

const Career = () => {
  return (
    <section id="career" className="pt-20 lgl:pb-80 xl:pb-52 bg-primary">
      <h1 className="section-title text-center pb-10">The Journey 🚀</h1>
      <div className="container mx-auto flex pb-20 lg:pb-56">
        <div className="hidden lgl:block w-1/2">
          {careers.map(
            ({ id, des, result, subTitle, title }, index) =>
              index % 2 !== 0 && (
                <CareerCardLeft
                  key={id}
                  title={title}
                  subTitle={subTitle}
                  des={des}
                  result={result}
                />
              )
          )}
        </div>
        <div className="mt-6 lgl:mt-14 mr-5 sml:mx-5 rounded-md h-[1650px] sm:h-[1350px] sml:h-[1150px] md:h-[1070px] mdl:h-[1050px] lg:h-[950px] lgl:h-[1365px] xl:h-[1250px] xxl:h-[1100px] border-r-[5px]" />
        <div className="hidden lgl:block w-1/2">
          {careers.map(
            ({ id, des, result, subTitle, title }, index) =>
              index % 2 === 0 && (
                <CareerCardRight
                  key={id}
                  title={title}
                  subTitle={subTitle}
                  des={des}
                  result={result}
                />
              )
          )}
        </div>
        <div className="lgl:hidden">
          {careers.map(({ id, des, result, subTitle, title }) => (
            <CareerCardRight
              key={id}
              title={title}
              subTitle={subTitle}
              des={des}
              result={result}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
