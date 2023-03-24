import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
      <div className="h-[100vh] hidden w-1/3 bg-slate-900 fixed left-0 md:flex justify-center items-center">
        <Image
          src={
            "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-white.svg"
          }
          width={300}
          height={300}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center justify-start md:w-2/3 w-full ">
        <div className=" py-12">
          <Image
            src={
              "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-slate-writing.svg"
            }
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className=" text-[39px] text-slate-700 font-bold">
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
        <div className="w-full max-w-xl">
          <form className=" rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder=""
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between gap-5">
              <button
                className="bg-slate-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
