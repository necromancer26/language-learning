import React from "react";

export default function TiteDescription({
  title = "Lorem ipsum dolor",
  description = "",
}) {
  return (
    <div>
      <h1 className="mb-5 text-5xl font-bold text-gray-600 font-[spectral]">
        {title || "Lorem ipsum dolor"}
      </h1>
      <span className="mb-5 text-m font-bold text-gray-600 font-[spectral]">
        {description}
      </span>
    </div>
  );
}
