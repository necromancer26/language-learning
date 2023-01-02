import React from "react";
import GlassyCard from "../reusables/glassy-card";
import DecoratingComponent from "./decorating-component";

export default function OtherServicesSection() {
  return (
    <div
      className="lg:h-[100vh] bg-center bg-cover bg-fixed bg-gradient-to-br from-blue-200 to-orange-300"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
      }}
    >
      <div className="bg-slate-50/[1] h-full flex ">
        {/* <div className="flex flex-col justify-around items-center h-full lg:flex-row">
          <GlassyCard />
          <GlassyCard />
        </div> */}
        <div className="flex justify-center items-center w-1/2">
          <DecoratingComponent />
        </div>
        <div className="flex justify-center items-center flex-col w-1/2">
          <h1 className="mb-5 text-5xl font-bold text-gray-600 font-[spectral]">
            Do more with Polydioms!
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima
            eligendi animi ex magnam corrupti. Nobis, voluptate! Veritatis,
            officia autem optio in iste sint sequi perspiciatis eos velit, culpa
            expedita?
          </span>
        </div>
      </div>
    </div>
  );
}
