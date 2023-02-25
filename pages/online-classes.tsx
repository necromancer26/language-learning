import CoursesList from "../components/courses/courses-list";
import Header from "../components/reusables/header";
export default function OnlineClasses() {
  return (
    <>
      <Header title="Online Courses" />
      <section className="flex w-full justify-center items-center py-6">
        <CoursesList />
      </section>
    </>
  );
}
