import { useState } from "react";
import { COUNTRIES } from "../lib/countries";
import Image from "next/image";
import Link from "next/link";

import SideFiller from "../components/reusables/side-filler";
import RegisterForm from "../components/user-auth/register-form";

export default function LoginRegister() {
  return (
    <div className=" bg-slate-50 flex w-full md:flex-row-reverse font-[Inter]">
      <SideFiller />
      <div className="flex flex-col items-center justify-start md:w-2/3 w-full h-auto lg:h-[120vh]">
        <div className="flex-row-reverse pt-10  pr-20 right-0 w-full hidden md:flex">
          <Link href={"/"}>
            <Image
              alt="home"
              width={20}
              height={20}
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fhome.svg"
            />
          </Link>
        </div>
        <div className="pb-6 pt-6 md:pt-0">
          <Link href={"/"} className="cursor-pointer">
            <Image
              src={
                "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-slate-writing.svg"
              }
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-[25px] lg:text-[39px] text-slate-700 font-bold text-center my-3">
            Welcome to Polydioms!
          </h1>
          <p className=" text-sm text-slate-700">
            Already have an account?{" "}
            <Link href={"/login"}>
              <span className=" font-bold border-b border-slate-700 hover:cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
