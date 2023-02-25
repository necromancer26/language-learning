import CoursesList from "../components/courses/courses-list";
import Header from "../components/reusables/header";
import Courses from "../interfaces/Courses";

export default function OnlineClasses({ courses }: any) {
  return (
    <>
      <Header title="Online classes to learn your preferred language" 
      description="Learn the language you want with the guidance of our expert tutors"
      />
      <div className=" bg-slate-100 w-full flex flex-col justify-center items-center gap-6 pt-6 font-[playfairdisplay] "></div>

      <section className="flex w-full justify-center items-center py-6 bg-slate-100">
        <CoursesList courses={courses} />
      </section>
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch(`https://polydioms.online/api/courses`);
    const courses: Courses = await res.json();

    // Pass data to the page via props
    // console.log(data);

    return { props: { courses } };
  } catch (err) {
    console.error(err);
  }
}
