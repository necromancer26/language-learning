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
        <div className="flex gap-6">
          <div>
            <Image
              height={50}
              width={50}
              alt="earth icon"
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth.png"
            />
          </div>
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>
        <div>
          <Image
            height={30}
            width={30}
            alt="earth icon"
            src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth.png"
          />
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>
        <div>
          <Image
            height={30}
            width={30}
            alt="earth icon"
            src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth.png"
          />
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>{" "}
        <div>
          <Image
            height={30}
            width={30}
            alt="earth icon"
            src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth.png"
          />
          <span className="mb-5 text-m font-bold  font-[spectral]  transition-all">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
