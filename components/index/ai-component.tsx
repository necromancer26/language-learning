import React from "react";

export default function AIComponent() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          A Beautiful Section
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          lacus at facilisis commodo, quam velit blandit velit, vel tincidunt
          libero enim a ante.
        </p>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Feature 1
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, lacus at facilisis commodo, quam velit blandit velit,
                vel tincidunt libero enim a ante.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Feature 2
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, lacus at facilisis commodo, quam velit blandit velit,
                vel tincidunt libero enim a ante.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Feature 3
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, lacus at facilisis commodo, quam velit blandit velit,
                vel tincidunt libero enim a ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
