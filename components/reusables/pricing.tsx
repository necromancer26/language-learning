import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import PricingCard from "./pricing-card";

const Pricing = () => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const courses = [
    {
      title: "Trial",
      price: "Free",
      features: [
        "Access to course content",
        "Limited resources",
        "Access to one class",
      ],
    },
    {
      title: "Basic",
      price: "$19.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
      ],
    },
    {
      title: "Standard",
      price: "$59.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
        "Live Q&A sessions",
        "Priority support",
      ],
    },
    {
      title: "Advanced",
      price: "$159.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
        "Live Q&A sessions",
        "Priority support",
      ],
    },
    {
      title: "Pro",
      price: "$299.99",
      features: [
        "Access to course content",
        "Downloadable resources",
        "Certificate of completion",
        "Live Q&A sessions",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-col-1 lg:grid-cols-5 gap-5">
          {courses.map((course, index) => (
            <Waypoint onEnter={() => setAnimationTrigger(true)} key={index}>
              <div>
                {" "}
                <PricingCard
                  index={index}
                  course={course}
                  animationTrigger={animationTrigger}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              </div>
            </Waypoint>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
