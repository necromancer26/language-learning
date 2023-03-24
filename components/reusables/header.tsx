import { useEffect, useState } from "react";

export default function Header({
  title = "Header",
  description = "description",
}: any) {
  const [blur, setBlur] = useState(10);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      // setNavbarIsScrolled(true);
      setBlur(blur + 1);
    } else {
      // setNavbarIsScrolled(false);
      setBlur(0);
    }
  };
  useEffect(() => {
    changeBackground();
    // console.log(blur);
    window.addEventListener("scroll", changeBackground);
    return () => {};
  }, []);

  return (
    <section className="min-h-[35vh] max-h-[40vh] font-[Inter] bg-slate-900 md:bg-slate-900 lg:bg-slate-900 lg:text-slate-200 w-full flex">
      <div className=" text-slate-200 md:text-slate-200 lg:text-slate-200 flex flex-col-reverse lg:flex-row justify-center items-center w-full my-20 lg:my-0">
        <div className="w-full md:w-[100%] flex justify-center flex-col items-center h-full mt-24">
          <div className="w-[90%] md:w-[80%] flex justify-center items-start flex-col">
            <h1 className="mb-5 text-4xl  text-start font-bold">
              {title}
            </h1>
            <p className=" mb-5 text-md md:text-lg text-start w-full">
              {description}
            </p>
          </div>
        </div>
        {/* <div
          className="lg:w-1/2 bg-cover bg-center w-full h-full hidden md:inline-block"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80')",
          }}
        >
          <div
            className={`h-full w-full backdrop-blur-[5px] from-[#2b2d42]`}
          ></div>
        </div> */}
      </div>
    </section>
  );
}
