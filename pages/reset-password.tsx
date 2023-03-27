import Image from "next/image";
import Link from "next/link";
import SideFiller from "../components/reusables/side-filler";
import ResetPasswordForm from "../components/user-auth/reset-password-form";

export default function ResetPassword() {
  return (
    <div className="h-[100vh] bg-slate-50 flex w-full md:flex-row-reverse font-[Inter]">
      <SideFiller />
      <div className="flex flex-col items-center justify-start md:w-2/3 w-full">
        <div className=" flex-row-reverse pt-10  pr-20 right-0 w-full hidden md:flex">
          <Link href={"/"} > 
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
              width={100}
              height={0}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[25px] md:text-[39px] text-slate-700 font-bold text-center my-3">
           Reset your password
          </h1>
          <p className=" text-sm text-slate-700">
            Your new password must be different than the old one
          </p>
        </div>
<ResetPasswordForm/>
      </div>
    </div>
  )
}
