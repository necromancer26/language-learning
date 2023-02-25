import { env } from "process";
import { useEffect, useState } from "react";
import ServicesSection from "../index/services-section";
import BasicCard from "../reusables/basic-card";
export default function CoursesList() {
  const [courses, setCourses] = useState<Array<any> | undefined>(undefined);
  const callAPI = async () => {
    try {
      const res = await fetch(`https://polydioms.online/api/courses`);
      const data = await res.json();
      // console.log(data);
      setCourses(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI();

    return () => {};
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2">
      {courses?.map((course: any, idx: number) => (
        <BasicCard course={course} key={idx} />
      ))}
      {/* <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard /> */}
    </div>
  );
}
