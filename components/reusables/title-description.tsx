import Image from "next/image";
import React from "react";

export default function TiteDescription({
  title = "Lorem ipsum dolor",
  description = "",
}) {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold  font-[spectral]  transition-all">
        {title || "Lorem ipsum dolor"}
      </h1>
      <div className=" grid grid-cols-1 gap-6 my-6 md:grid-cols-2 ">
        <div className="">
          <div className="flex gap-6 ">
            {/* <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth.png"
              // src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fplanet-earth.png"
            /> */}
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>
        <div>
          <div className="flex gap-6">
            {/* <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fwork-from-home.png"
            /> */}
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>
        <div>
          <div className="flex gap-6">
            {/* <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fmeeting.png"
            /> */}
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>{" "}
        <div>
          <div className="flex gap-6">
            {/* <Image
              height={30}
              width={30}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fbrain.png"
            /> */}
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
