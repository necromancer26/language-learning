import React from "react";
import Image from "next/image";
import AsianCountry from "../../assets/asian-country.jpg";
import AfricanCountry from "../../assets/african-country.jpg";
export default function FillerSection() {
  return (
    <div className="h-[100vh] bg-slate-100 flex">
      <div className="w-1/2 flex flex-col justify-center items-center h-full pl-8 ">
        <h1 className="mb-5 text-5xl font-bold text-gray-600 font-[spectral]">
          Learn with your preferred language
        </h1>
        <span className="mb-5 text-m font-bold text-gray-600 font-[spectral]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          facere autem aliquam totam excepturi eius sapiente quisquam
          consectetur numquam. Rerum, veniam! Provident commodi magnam veritatis
          nesciunt cumque, alias obcaecati quis! Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit. Hic dolor ut alias qui doloribus impedit
          modi id tenetur quia non! Repudiandae sint minus ut accusamus odio
          sapiente recusandae pariatur perspiciatis?
        </span>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className=" grid grid-cols-2  items-stretch gap-4 h-[80%] w-[80%] ">
          <div
            className="bg-[#2a9d8f] row-span-2 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
            }}
          >
            {/* <Image src={AsianCountry} alt="filler image" /> */}
          </div>
          <div
            className="bg-[#e9c46a] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1567564967039-a5839aa2d89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
            }}
          >
            {/* <Image src={AfricanCountry} alt="filler image" /> */}
          </div>
          <div
            className="bg-[#f4a261]  row-span-2 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            {/* <Image src={AfricanCountry} alt="filler image" /> */}
          </div>
          <div
            className="bg-[#ffc8dd] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/8720186/pexels-photo-8720186.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            {/* <Image src={AfricanCountry} alt="filler image" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
