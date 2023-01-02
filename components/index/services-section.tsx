import React from "react";
import BasicCard from "../reusables/basic-card";
export default function ServicesSection() {
  return (
    <div>
      {/* <div className="h-[10vh] bg-gradient-to-t from-indigo-500"></div> */}
      <div className="bg-slate display flex flex-col justify-center items-center lg:h-[100vh] bg-slate-50">
        <h1 className="text-5xl font-bold text-gray-600 font-[spectral] text-center mt-5">
          What Polydioms Has To Offer
        </h1>
        <div className="flex justify-around items-center w-full mt-10 flex-col lg:flex-row">
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </div>
      </div>
      {/* <div className="h-[10vh] from[##03045e]"></div> */}
    </div>
  );
}
