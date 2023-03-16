import { env } from "process";
import { useEffect, useState } from "react";
import CourseList from "../../interfaces/Courses";
import ServicesSection from "../index/services-section";
import BasicCard from "../reusables/basic-card";
export default function CoursesList({ courses, courseListToShow }: any) {
  useEffect(() => {
    return () => {};
  }, [courseListToShow]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2">
      {courses?.map(
        (course: any, idx: number) =>
          course[courseListToShow] && (
            <BasicCard course={course} key={idx} idx={idx} />
          )
      )}
    </div>
  );
}
// This gets called on every request
