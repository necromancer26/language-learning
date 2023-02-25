import { useEffect, useState } from "react";

export default function Header({ title = "Header",description ="description"}:any) {
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
    <section className="pt-0 h-full lg:h-[50vh] font-[spectral] bg-slate-200 md:bg-slate-200 lg:bg-slate-900 lg:text-slate-200 w-full flex">
      <div className=" text-slate-900 md:text-slate-700 lg:text-slate-200 flex flex-col-reverse lg:flex-row justify-center items-center w-full my-20 lg:my-0">
        <div className="w-full lg:w-1/2 flex justify-center flex-col items-center h-full">
          <div className="w-[90%] md:w-[90%] lg:w-[80%] flex justify-center items-start flex-col">
            <h1 className="mb-5 text-4xl md:text-4xl  lg:text-5xl font-bold text-start ">
              {title}
            </h1>
            <p className=" mb-5 text-md md:text-lg  lg:text-2xl text-start w-full">
              {/* Online English classes to practice speaking together */}
              {description}
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 bg-cover bg-center w-full h-full hidden md:inline-block"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80')",
          }}
        >
          <div
            className={`h-full w-full backdrop-blur-[5px] from-[#2b2d42]`}
          ></div>
        </div>
        {/* <p className="w-full">
          {`We offer a wide range of online and in-person language courses designed to help learners
           of all levels achieve their language goals. \n Our courses are designed and taught by
            experienced language instructors who are passionate about
             helping students succeed.`}
        </p> */}
      </div>
    </section>
  );
}
