import React from "react";
import Learning from "../../public/assets/learning.svg";
import Workshop from "../../public/assets/workshop.svg";
import Translation from "../../public/assets/translate.svg";
import Image from "next/image";
export default function AIComponent() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          A Beautiful Section
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          lacus at facilisis commodo, quam velit blandit velit, vel tincidunt
          libero enim a ante.
        </p>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex my-5 ">
                <Image
                  // fill
                  src={Learning}
                  alt="learning icon"
                  // width={50}
                  height={40}
                  className=""
                />
                <h3 className="text-lg font-medium text-gray-800 mb-4 ml-4">
                  Learning
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, lacus at facilisis commodo, quam velit blandit velit,
                vel tincidunt libero enim a ante.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex my-5">
                <Image
                  // fill
                  src={Translation}
                  alt="learning icon"
                  // width={50}
                  height={40}
                  className=""
                />
                <h3 className="text-lg font-medium text-gray-800 mb-4 ml-4">
                  Translation
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, lacus at facilisis commodo, quam velit blandit velit,
                vel tincidunt libero enim a ante.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex my-5">
                <Image
                  // fill
                  src={Workshop}
                  alt="learning icon"
                  // width={50}
                  height={40}
                  className=""
                />
                <h3 className="text-lg font-medium text-gray-800 mb-4 ml-4">
                  Workshops
                </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, lacus at facilisis commodo, quam velit blandit velit,
                vel tincidunt libero enim a ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
