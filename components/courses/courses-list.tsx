import { env } from "process";
import { useEffect, useState } from "react";
import CourseList from "../../interfaces/Courses";
import ServicesSection from "../index/services-section";
import BasicCard from "../reusables/basic-card";
export default function CoursesList({courses}:CourseList) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2">

      {courses?.map((course: any, idx: number) => (
        <>
        <BasicCard course={course} key={idx} idx={idx} />

        </>
      ))}
      {/* <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard /> */}
    </div>
  );
}
// This gets called on every request

