import { useState } from "react";
import Learning from "../../public/assets/learning.svg";
import Workshop from "../../public/assets/workshop.svg";
import Translation from "../../public/assets/translate.svg";
import ServiceCard from "../reusables/service-card";
import { Waypoint } from "react-waypoint";
export default function Services() {
  const [animationTrigger, setAnimationTrigger] = useState(false);
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
        <div className="flex flex-col lg:flex-row">
          {services.map((service, index) => (
            <Waypoint onEnter={() => setAnimationTrigger(true)} key={index}>
              <div>
                <ServiceCard
                  service={service}
                  index={index}
                  animationTrigger={animationTrigger}
                />
              </div>
            </Waypoint>
          ))}
        </div>
      </div>
    </section>
  );
}
