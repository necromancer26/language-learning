import React from "react";
import Testimonial from "./testimonial";
export default function TestimonialsContainer() {
  return (
    <section className="bg-white dark:bg-slate-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>{" "}
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <Testimonial
            title="Developer at Open AI"
            name="Bonnie Green"
            bg="50"
          />
          <Testimonial
            title="Lead designer at Dropbox"
            name="Roberta Casas"
            bg="100"
          />
          <Testimonial
            title="Software Engineer at Facebook"
            name="Jese Leos"
            bg="200"
          />
          <Testimonial title="CTO at Google" name="Joseph McFall" bg="300" />
        </div>
        {/* <div className="text-center">
          <a
            href="#"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Show more...
          </a>
        </div> */}
      </div>
    </section>
  );
}
