import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://polydioms.com/wp-content/uploads/2022/12/pexels-nothing-ahead-4440720-scaled.jpg')",
      }}
    >
      <div className="hero min-h-screen bg-gradient-to-r from-[#03045e] flex">
        <div className="w-1/2 h-[100vh] flex justify-center items-start flex-col p-20">
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

        {/* <div className="hero-content flex-col lg:flex-row bg-gray-300 hidden">
        <Image
          src="https://polydioms.com/wp-content/uploads/2022/12/pexels-nothing-ahead-4440720-scaled.jpg"
          alt="placement image"
          // className="max-w-sm rounded-lg shadow-2xl"
          width={500}
          height={300}
          className="rounded-md"
          // fill
        />
        <div>
          <h1 className="text-5xl font-bold">Lorem Ipsum!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            corrupti neque, sapiente eos excepturi, sequi ipsam qui, libero
            consequuntur modi culpa? Quas reprehenderit aperiam fugiat est rem
            nobis incidunt deleniti.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div> */}
      </div>
    </div>
  );
}
