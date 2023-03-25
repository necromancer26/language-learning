import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SideFiller from "../components/reusables/side-filler";
import LoginForm from "../components/user-auth/login-form";
export default function LoginRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="h-[100vh] bg-slate-50 flex w-full md:flex-row-reverse font-[Inter]">
      <SideFiller />
      <div className="flex flex-col items-center justify-start md:w-2/3 w-full">
        <div className=" flex-row-reverse pt-10  pr-20 right-0 w-full hidden md:flex">
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
              width={100}
              height={0}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[25px] md:text-[39px] text-slate-700 font-bold text-center my-3">
            Glad to see you back!
          </h1>
          <p className=" text-sm text-slate-700">
            New to Polydioms?{" "}
            <Link href={"/sign-up"}>
              <span className=" font-bold border-b border-slate-700 hover:cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
