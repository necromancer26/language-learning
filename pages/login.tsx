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
      <div className="h-[100vh] hidden w-1/3 bg-slate-900 fixed left-0 md:flex md:flex-col justify-center items-center gap-20 px-4">
        <Link href={"/"}>
          <Image
            src={
              "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-white.svg"
            }
            width={300}
            height={300}
            alt="logo"
          />
        </Link>
        <h1 className="text-white font-[Satisfy] text-[32px] text-center">
          {"Discover a new way to learn languages!"}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-start md:w-2/3 w-full">
      <div className=" flex flex-row-reverse pt-10  pr-20 right-0 w-full">
          <Link href={"/"}>
            <Image
              alt="home"
              width={20}
              height={20}
              src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fhome.svg"
            />
          </Link>
        </div>
        <div className="pb-6 pt-0">
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
        <div className="w-full max-w-xl">
          <form className=" rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Your email address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
                Your password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                className="bg-slate-900 hover:bg-teal-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline  text-sm text-slate-500 hover:text-teal-500"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy; Polydioms SA. 2023.
          </p>
        </div>
      </div>
    </div>
  );
}
