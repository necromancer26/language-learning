import Link from "next/link";
import React from "react";

export default function LoginForm() {
  return (
    <div className="w-full max-w-xl">
      <form className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
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
        <div className="flex flex-col items-center justify-between gap-3 transition-all">
          <button
            className="bg-slate-900 hover:bg-teal-500 text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Sign In
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
          <Link
            className="inline-block align-baseline  text-sm text-slate-500 hover:text-teal-500"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy; Polydioms SA. 2023.
      </p>
    </div>
  );
}
