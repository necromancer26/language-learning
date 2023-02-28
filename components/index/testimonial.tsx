import Image from "next/image";
import React from "react";

export default function Testimonial({
  title = "Developer at OpenAI",
  name = "John Doe",
  bg = "200",
}) {
  return (
    <figure
      className={`flex flex-col justify-center items-center p-8 text-center border-none md:p-12 lg:border-r dark:bg-slate-800 dark:border-slate-700 bg-slate-${bg}   `}
    >
      <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 ">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Speechless with how easy this was to integrate
        </h3>
        <p className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
          exercitationem. Sit consequatur fuga totam saepe ab laboriosam, culpa
          amet ratione, consectetur sapiente, vero maxime. Quisquam quas esse
          commodi quo molestias?
        </p>
      </blockquote>
      <figcaption className="flex justify-center items-center space-x-3">
        <Image
          className="w-9 h-9 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt="profile picture"
          width={10}
          height={10}
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{name}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
            {title}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
