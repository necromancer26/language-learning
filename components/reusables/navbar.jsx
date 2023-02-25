import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/router';
import PolydiomsLogo from "../../public/assets/polydioms-logo.svg";
export default function Navbar() {
  const router=useRouter()
  const [navbarIsScrolled, setNavbarIsScrolled] = useState(true);
  const [dropdownIsClicked, setDropdownIsClicked] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66 ) {
      setNavbarIsScrolled(true);
    } 

    else {
      setNavbarIsScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    console.log(router.pathname)
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => {};
  }, []);

  return (
    <div
      className={`navbar fixed z-50 ease-in m-0 ${
        navbarIsScrolled
          ? " bg-slate-100/[0.5] backdrop-blur-md"
          : "bg-transparent text-white transition-all"
      }`}
    >
      <div className="navbar-start transition-all w-full">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={(e) => {
              e.preventDefault();
              setDropdownIsClicked(!dropdownIsClicked);
              console.log(dropdownIsClicked);
            }}
          >
            <label className="swap swap-rotate">
              <input type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </button>
          {dropdownIsClicked && (
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content m-0 p-2 shadow rounded-box bg-slate-400/50 h-[100vh] w-[100vw] backdrop-blur-sm`}
            >
              <li>item</li>
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          )}
        </div>
        <Link href="/" className=" transition-all">
          <Image
            src={
              navbarIsScrolled
                ? PolydiomsLogo
                : "https://polydioms.com/wp-content/uploads/2022/07/Asset-3_white.svg"
            }
            alt="Logo Polydioms"
            width={100}
            height={100}
            className="ml-10 transition-all"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Courses
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white text-black">
              <li>
                <Link href="online-classes">Online Classes</Link>
              </li>
              <li>
                <Link href="in-person-classes">In-person Classes</Link>
              </li>
              <li>
                <Link href="children-workshop">Children Workshop</Link>
              </li>
            </ul>
          </li>
          <li tabIndex={1}>
            <a>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white text-black">
              <li>
                <Link href="translation">Translation</Link>
              </li>
              <li>
                <Link href="consulting">Consulting</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="about-us">About Us</Link>
          </li>
          <li>
            <Link href="faqs">FAQs</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
