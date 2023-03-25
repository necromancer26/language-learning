import Image from "next/image";
import React from "react";

export default function TitleDescription({
  title = "Lorem ipsum dolor",
  description = "",
}) {
  return (
    <div className="font-[Inter]">
      <h1 className=" text-4xl font-bold transition-all  text-start my-12 lg:mt-0">
        {title || "Lorem ipsum dolor"}
      </h1>
      <div className=" grid ">
        <div className="">
          <div className="flex flex-col gap-6">
          <span className="mb-5 text-m   transition-all">
            {
              "We offer courses in Spanish, French, German, Mandarin, and many more languages. Our experienced instructors are native speakers, ensuring that you receive an authentic learning experience."
            }
          </span>
          <span className="mb-5 text-m    transition-all">
            {
              "Our courses are designed to help you learn with your preferred language. We understand that learning a new language can be challenging, so we offer a range of resources to support you along the way."
            }
          </span>
          </div>

        </div>
      </div>
    </div>
  );
}
