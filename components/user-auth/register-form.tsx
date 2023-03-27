import { useState } from "react";
import { COUNTRIES } from "../../lib/countries";
import { SelectMenuOption } from "../../types/types";
import CountrySelector from "../reusables/selector";

export default function RegisterForm() {
  const [country, setCountry] = useState<SelectMenuOption["value"]>("US");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full max-w-xl ">
      <form className="pb-8 mb-4 w-full pt-6 px-8">
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-2"
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
              className="block tracking-wide text-gray-700 text-xs  mb-2"
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
              className="block  tracking-wide text-gray-700 text-xs  mb-2"
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
              className="block  tracking-wide text-gray-700 text-xs  mb-2"
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
              className="block  tracking-wide text-gray-700 text-xs  mb-2"
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
              className="block  tracking-wide text-gray-700 text-xs  mb-2"
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
              className="block  tracking-wide text-gray-700 text-xs  mb-2"
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
            Register with Google
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy; Polydioms SA. 2023.
      </p>
    </div>
  );
}
