import Image from "next/image";
import AsianCountry from "../../assets/asian-country.jpg";
import React from "react";

export default function DecoratingComponent() {
  return (
    <div className="lg:relative  h-full w-full">
      <div
        className="h-[600px] w-[600px] bg-cover bg-center lg:absolute rounded-md bg-black top-10 left-10 z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
        }}
      ></div>
      <div
        // style={{
        //   backgroundImage:
        //     "url('https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg?auto=compress&cs=tinysrgb&w=800')",
        // }}
        className=" h-[200px] lg:absolute w-[200px] lg:bottom-[10%] lg:right-[5%] rounded-md bg-gray-700 bg-center bg-cover z-0"
      />
    </div>
  );
}
