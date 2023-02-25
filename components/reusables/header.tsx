export default function Header({ title = "Header" }) {
  return (
    <section className=" pt-20 lg:h-[50vh] bg-slate-900 flex justify-center items-center w-full">
      <h1 className="mb-5  lg:w-full text-5xl font-bold text-slate-100 font-[playfairdisplay] relative  text-center">
        {title}
      </h1>
      <p>
        We offer a wide range of online language courses designed to help
        learners of all levels achieve their language goals. Our courses are
        designed and taught by experienced language instructors who are
        passionate about helping students succeed.
      </p>
    </section>
  );
}
