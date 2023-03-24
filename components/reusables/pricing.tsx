import PricingCard from "./pricing-card";
import { useState } from "react";

const Pricing = () => {
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
    <section className="px-8 py-12  bg-slate-200">
      <div className="container mx-auto px-0">
        <div className="flex justify-center items-center flex-col mb-12 x">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Choose your pack
          </h2>
          <p className=" text-[20px]">
            Sign up and choose the pack that suits you best!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-col-1 lg:grid-cols-5 gap-5">
          {courses.map((course, index) => (
            <PricingCard
              index={index}
              course={course}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
