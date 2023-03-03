import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navbarIsScrolled, setNavbarIsScrolled] = useState(true);
  const [dropdownIsClicked, setDropdownIsClicked] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarIsScrolled(true);
    } else {
      setNavbarIsScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // console.log(dropdownIsClicked);
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => {};
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed z-50 ease-in m-0 flex font-[inter] items-center h-[10vh] justify-between flex-wrap  lg:h-auto   lg:p-6  w-full  
      ${
        navbarIsScrolled
          ? " bg-slate-200/[0.5] backdrop-blur-md lg:text-slate-900"
          : "bg-transparent lg:text-slate-100 transition-all"
      }

      `}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" className=" transition-all ">
            <Image
              src={
                navbarIsScrolled
                  ? "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-black.svg"
                  : "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-white.svg"
              }
              alt="Logo Polydioms"
              width={100}
              height={100}
              className="ml-10 transition-all"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 mr-10  lg:mr-0 py-2 border rounded text-slate-200 border-slate-200 hover:text-slate-200 hover:border-slate-200"
            onClick={() => {
              console.log("clicked");
              setDropdownIsClicked(!dropdownIsClicked);
            }}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full absolute lg:relative top-0 opacity-0 lg:opacity-100 left-[-100%]   ${
            dropdownIsClicked && "left-[0] opacity-100"
          } lg:flex-grow lg:flex lg:items-center lg:w-auto lg:left-0 lg:bg-transparent
           justify-center h-[90vh] lg:h-auto mt-[10vh] lg:mt-0 transition-all duration-500 bg-slate-200`}
        >
          <div className="block transition-all ease-linear lg:pl-0 text-sm h-full lg:flex-grow flex-col lg:flex-row  lg:justify-start justify-center items-center">
            <Link
              className="cool-link block pl-4 lg:pl-0 py-4 lg:py-2 lg:inline-block lg:mt-0  hover:text-white mr-4 hover:bg-slate-400 w-full lg:w-auto lg:hover:bg-transparent"
              onClick={() => setDropdownIsClicked(!dropdownIsClicked)}
              href={"/"}
            >
              Home
            </Link>
            <Link
              href="online-classes"
              className={
                "cool-link block pl-4 lg:pl-0 py-4 lg:py-2 lg:inline-block lg:mt-0  hover:text-white mr-4 hover:bg-slate-400 w-full lg:w-auto lg:hover:bg-transparent"
              }
              onClick={() => setDropdownIsClicked(!dropdownIsClicked)}
            >
              Online Classes
            </Link>

            <Link
              href="about-us"
              className={
                "cool-link block pl-4 lg:pl-0 py-4 lg:py-2 lg:inline-block lg:mt-0  hover:text-white mr-4 hover:bg-slate-400 w-full lg:w-auto lg:hover:bg-transparent"
              }
              onClick={() => setDropdownIsClicked(!dropdownIsClicked)}
            >
              About Us
            </Link>
            <Link
              className={
                "cool-link block pl-4 lg:pl-0 py-4 lg:py-2 lg:inline-block lg:mt-0  hover:text-white mr-4 hover:bg-slate-400 w-full lg:w-auto lg:hover:bg-transparent"
              }
              onClick={() => setDropdownIsClicked(!dropdownIsClicked)}
              href="faqs"
            >
              FAQs
            </Link>
            <Link
              className={
                "cool-link block pl-4 lg:pl-0 py-4 lg:py-2 lg:inline-block lg:mt-0  hover:text-white mr-4 hover:bg-slate-400 w-full lg:w-auto lg:hover:bg-transparent"
              }
              onClick={() => setDropdownIsClicked(!dropdownIsClicked)}
              href="contact"
            >
              Contact
            </Link>
          </div>

          {/* <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-900 font-bold border-slate-900  hover:border-transparent hover:text-slate-900 hover:bg-slate-900 mt-4 lg:mt-0"
            >
              Log In
            </a>
          </div> */}
        </div>
      </div>
      {/* <div className="h-[100vh]  absolute z-50 top-0 left-0 w-[500px]"></div> */}
    </div>
  );
}
{
  /* <Link href="online-classes">Online Classes</Link>
<Link href="in-person-classes">In-person Classes</Link>
<Link href="children-workshop">Children Workshop</Link>
<Link href="translation">Translation</Link>
<Link href="consulting">Consulting</Link> */
}
