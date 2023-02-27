import Image from "next/image";

export default function ServiceCard({
  serviceImage = "",
  title = "",
  description = "",
}) {
  return (
    <div className="w-full md:w-1/3 px-2 mb-4">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="flex my-5 ">
          <Image
            // fill
            src={serviceImage}
            alt="service icon"
            // width={50}
            height={40}
            className=""
          />
          <h3 className="text-lg font-medium text-gray-800 mb-4 ml-4">
            {title}
          </h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
