export default function Contact() {
  return (
    <section className=" text-gray-800 flex h-[100vh]">
      <div className="lg:w-full w-full flex justify-center items-center bg-slate-900">
        <div className="w-full max-w-xl">
          <h1 className=" text-5xl font-bold my-12 text-slate-400 px-8">
            Send us a message
          </h1>
          <form className="rounded px-8 pt-6 pb-8 mb-4 text-white">
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-100 text-xs  mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-100 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  className="block  tracking-wide text-gray-100 text-xs  mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-100 text-xs  mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-100 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block  tracking-wide text-gray-100 text-xs  mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={10}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 transition-all">
              <button
                className="bg-slate-500 hover:bg-teal-500 text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy; Polydioms SA. 2023.
          </p>
        </div>
      </div>
    </section>
  );
}
