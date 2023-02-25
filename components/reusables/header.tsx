export default function Header({ title = "Header" }) {
  return (
    <section className=" pt-20 lg:h-[50vh] bg-slate-900 flex justify-center items-center w-full">
      <h1 className="mb-5  lg:w-full text-5xl font-bold text-slate-100 font-[playfairdisplay] relative  text-center">
        {title}
      </h1>
    </section>
  );
}
