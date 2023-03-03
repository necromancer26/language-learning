import Learning from "../../public/assets/learning.svg";
import Workshop from "../../public/assets/workshop.svg";
import Translation from "../../public/assets/translate.svg";
import ServiceCard from "../reusables/service-card";
export default function Services() {
  const services = [
    {
      serviceImage: Learning,
      title: "Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus at facilisis commodo, quam velit blandit velit, vel tincidunt libero enim a ante.",
    },
    {
      serviceImage: Translation,
      title: "Translation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus at facilisis commodo, quam velit blandit velit, vel tincidunt libero enim a ante.",
    },
    {
      serviceImage: Workshop,
      title: "Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus at facilisis commodo, quam velit blandit velit, vel tincidunt libero enim a ante.",
    },
  ];
  return (
    <section className="bg-gray-100 py-12 flex justify-center items-center">
      <div className="flex flex-col  mx-auto px-6 justify-center items-center">
        <div className="border-solid">
          <h2 className="text-3xl font-bold text-gray-800 mb-6  w-64">
            What we offer!
          </h2>
          <p className="text-gray-600 mb-8">
            Here are the services we deliver and more
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
