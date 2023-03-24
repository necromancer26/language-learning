import { useState } from "react";
import { COUNTRIES } from "../lib/countries";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import CountrySelector from "../components/reusables/selector";
import { SelectMenuOption } from "../types/types";

export default function LoginRegister() {
  const [country, setCountry] = useState<SelectMenuOption["value"]>("US");
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState("");
  // const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: string) => {
    setValue(value);
  };
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className=" bg-slate-50 flex w-full md:flex-row-reverse font-[Inter]">
      <div className="h-[100vh] hidden w-1/3 bg-slate-900 fixed left-0 md:flex md:flex-col justify-center items-center gap-20 px-4">
        <Image
          src={
            "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-white.svg"
          }
          width={300}
          height={300}
          alt="logo"
        />
        <h1 className="text-white font-[Satisfy] text-[32px] text-center">
          {"Discover a new way to learn languages!"}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-start md:w-2/3 w-full h-auto lg:h-[120vh]">
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
        <div className="w-full max-w-xl my-6 ">
          <form className="px-8 pb-8 mb-4">
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-2/3 px-3 mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="country-selector"
                >
                  Country
                </label>
                <CountrySelector
                  id={"country-selector"}
                  open={isOpen}
                  onToggle={() => setIsOpen(!isOpen)}
                  onChange={setCountry}
                  selectedValue={
                    COUNTRIES.find((option) => option?.value === country) ||
                    COUNTRIES[0]
                  }
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-zip"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder=""
                />
              </div>
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                  htmlFor="grid-confirm-password"
                >
                  Confirm password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-confirm-password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <button
                className="bg-slate-900 hover:bg-teal-500 text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors"
                type="button"
              >
                Register
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 bg-slate-600 hover:bg-blue-600 text-white  my-3 w-full -mx-3 rounded transition-colors">
                <picture>
                  <img
                    src="https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fgoogle-icon.svg"
                    alt="google sigun"
                    className="h-6 w-6"
                  />
                </picture>
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
