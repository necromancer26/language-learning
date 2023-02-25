import CoursesList from "../components/courses/courses-list";
import Header from "../components/reusables/header";
import Courses from "../interfaces/Courses";

export default function OnlineClasses({ courses }: Courses) {
  return (
    <>
      <Header title="Courses" />
      <div className=" bg-slate-100 w-full flex flex-col justify-center items-center gap-6 pt-6 font-[playfairdisplay] ">
        {/* <span className=" lg:text-5xl font-[spectral]">Discover the world with our language courses!</span> */}
        {/* <div className="bg-slate-300 rounded-none w-[300px] flex items-center justify-center">
          <button className="w-full text-slate-800 hover:text-white focus:text-white px-6 py-3 rounded-none hover:bg-slate-700 focus:bg-slate-900">
            Online
          </button>
          <button className="w-full text-slate-900 hover:text-white focus:text-white px-6 py-3 rounded-none hover:bg-slate-700 focus:bg-slate-900">
            In Person
          </button>
        </div> */}
      </div>

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
