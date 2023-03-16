import Image from "next/image";
import React from "react";

export default function TitleDescription({
  title = "Lorem ipsum dolor",
  description = "",
}) {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold  font-[spectral]  transition-all">
        {title || "Lorem ipsum dolor"}
      </h1>
      <div className=" grid grid-cols-1 gap-10 my-6 md:grid-cols-2">
        <div className="">
          <div className="flex gap-6">
            <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth.png"
              // src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fplanet-earth.png"
            />
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {
              "We offer courses in Spanish, French, German, Mandarin, and many more languages. Our experienced instructors are native speakers, ensuring that you receive an authentic learning experience."
            }
          </span>
        </div>
        <div className="">
          <div className="flex gap-6">
            <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fwork-from-home.png"
            />
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {
              "Our courses are designed to help you learn with your preferred language. We understand that learning a new language can be challenging, so we offer a range of resources to support you along the way."
            }
          </span>
        </div>
        <div className="">
          <div className="flex gap-6">
            <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fmeeting.png"
            />
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {
              "We believe that everyone should have the opportunity to learn a new language, and we offer courses and services in a variety of languages to suit your needs."
            }
          </span>
        </div>{" "}
        <div className="">
          <div className="flex gap-6">
            <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fbrain.png"
            />
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {
              "Whether you're a beginner or an advanced learner, our courses are tailored to suit your level of proficiency. Our aim is to help you achieve your language goals, whether it's for personal or professional reasons."
            }
          </span>
        </div>
      </div>
    </div>
  );
}
