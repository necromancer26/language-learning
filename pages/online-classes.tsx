import CoursesList from "../components/courses/courses-list";
import Header from "../components/reusables/header";
import Courses from "../interfaces/Courses";
import React, { useState } from "react";

interface Props {
  courses: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const OnlineClasses: React.FC<Props> = ({ courses }) => {
  const [coursesToList, setCoursesToList] = useState("isOnline");
  return (
    <div className="bg-slate-100">
      <Header
        title="Online classes to learn your preferred language"
        description="Learn the language you want with the guidance of our expert tutors"
      />
      {/* <div className=" bg-slate-100 w-full flex flex-col justify-center items-center gap-6 pt-6 font-[playfairdisplay] "></div> */}
      <div className="flex justify-center items-center bg-transparent my-10">
        <div className=" bg-slate-100 text-slate-900 lg:w-96 flex justify-center items-center border-2 border-slate-900 rounded-full">
          <button className="py-3 text-center focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center  w-full rounded-full">
            Online courses
          </button>
          <button className="py-3 text-center focus:text-slate-50 focus:bg-slate-900 flex justify-center items-center w-full rounded-full">
            In-person courses
          </button>
        </div>
      </div>
      <section className="flex w-full justify-center items-center py-6 bg-slate-100">
        <CoursesList courses={courses} />
      </section>
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch(`https://polydioms.online/api/courses`);
    const courses: any = await res.json();
    return { props: { courses } };
  } catch (err) {
    console.error(err);
  }
}
export default OnlineClasses;
