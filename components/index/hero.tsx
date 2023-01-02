import React from "react";
export default function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://polydioms.com/wp-content/uploads/2022/12/pexels-nothing-ahead-4440720-scaled.jpg')",
      }}
    >
      <div className="hero min-h-screen bg-gradient-to-r from-[#2b2d42] flex">
        {/* bg-gradient-to-r from-[#03045e] */}
        <div className="lg:w-1/2 h-[100vh] flex justify-center items-start flex-col p-20">
          <h1 className="mb-5 text-5xl font-bold text-white font-[playfairdisplay]">
            LANGUAGE BARRIER <br />
            <span className="font-[spectral]">
              SHALL NOT <br /> HINDER <br /> YOUR SUCCESS
            </span>
          </h1>
          <span className=" text-gray-300 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex harum
            delectus, velit eligendi similique eius cum temporibus voluptatum
            officia minima eos aperiam amet iste atque mollitia animi ipsa quam
            earum?
          </span>
          <a className="btn">Explore our services</a>
          {/*         
        <div className=" bg-blue-200 h-[200px] w-[200px] rounded-full bg-[url('../assets/american-country.jpg')] bg-center bg-cover m-5"></div>
        <div className=" bg-blue-200 h-[200px] w-[200px] rounded-full bg-[url('../assets/asian-country.jpg')] bg-center bg-cover m-5"></div>
        <div className=" bg-blue-200 h-[200px] w-[200px] rounded-full bg-[url('../assets/african-country.jpg')] bg-center bg-cover m-5"></div> */}
        </div>
        <div className="w-1/2 h-[100vh]"></div>
      </div>
    </div>
  );
}
