import Link from 'next/link'
import React from 'react'

export default function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-xl">
      <form className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Your email address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder=""
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 transition-all">
          <button
            className="bg-slate-900 hover:bg-teal-500 text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Send me the link
          </button> 
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy; Polydioms SA. 2023.
      </p>
    </div>
  )
}
