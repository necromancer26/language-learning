import Image from "next/image";
import Footer from "../components/reusables/footer";
import TiteDescription from "../components/reusables/title-description";

export default function About() {
  return (
    <>
      <div
        className=" h-[50vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/assets/world.jpeg')" }}
      >
        <div className="flex items-center justify-center h-full backdrop-blur-[5px]">
          <h1 className=" text-5xl font-[playfairdisplay] text-slate-100">
            About Us
          </h1>
        </div>
      </div>
      <div className="lg:h-[100vh] flex lg:flex-row w-full flex-col bg-slate-100 justify-center items-center">
        <div className="lg:w-1/2 h-full my-9 flex justify-center items-center">
          <div className="grid grid-cols-4 grid-rows-3  gap-4 justify-center items-center h-[90vh] w-full p-10">
            <div
              className="h-full w-full bg-[#0d1b2a] row-span-2 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            >
              <div className=" opacity-0 hover:opacity-80 bg-slate-500 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-3xl text-white font-thin">
                  English
                </span>
              </div>
            </div>
            <div
              className="h-full w-full bg-[#415a77] row-span-2 col-span-2 bg-center bg-cover hover:bg-slate-500"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2130616/pexels-photo-2130616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            >
              <div className=" opacity-0 hover:opacity-80 bg-slate-800 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-5xl text-white font-thin">
                  Français
                </span>
              </div>
            </div>
            <div
              className="h-full w-full bg-[#33415c] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/234315/pexels-photo-234315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            >
              <div className="opacity-0 hover:opacity-80 bg-slate-600 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-2xl text-white font-thin">
                  Deutsch
                </span>
              </div>
            </div>
            <div
              className="h-full w-full bg-[#2f4858] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            >
              <div className="opacity-0 hover:opacity-80 bg-slate-500 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-3xl lg:text-5xl text-white font-thin flex justify-center items-center w-full h-full">
                  日本
                </span>
              </div>
            </div>
            <div
              className="h-full w-full bg-[#454955] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/13295923/pexels-photo-13295923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            >
              <div className="opacity-0 hover:opacity-80 bg-slate-900 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-5xl text-white font-thin">
                  فارسی
                </span>
              </div>
            </div>
            <div
              className="h-full w-full bg-[#454955] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            >
              <div className="opacity-0 hover:opacity-80 bg-slate-500 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-3xl text-white font-thin">
                  ελληνικά
                </span>
              </div>
            </div>
            <div
              className="h-full w-full bg-[#22333b] col-span-2 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/4098991/pexels-photo-4098991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ')",
              }}
            >
              <div className="opacity-0 hover:opacity-80 bg-slate-500 h-full w-full transition-all ease-in flex justify-center items-center">
                <span className="transition-all delay-150 text-5xl text-white font-thin">
                  한국인
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-slate-800 flex flex-col items-start justify-center text-slate-200  h-full">
          <div className="flex flex-col px-10">
            <h2 className="text-5xl my-10 ">Language Courses</h2>
            <p className="text-xl">
              The Polydioms method favors oral expression that is built and
              structured through active and focused dialogues. It is based on
              techniques that allow quick and efficient memorization through the
              spontaneous and immediate use of the language.
              <br />
              A direct, global, progressive and communicative methodology
              <br />
              Polydioms’ pedagogical approach is based on the principles of the
              direct method and aims to promote the pleasure of learning through
              constant encouragement, motivation and confidence. The learning
              process is achieved thanks to the discovery of a new language
              through its own culture. These are specific contents about a
              various contexts, where the autonomy of the students is developed
              via systematic practice and role-playing games.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:h-[100vh] flex">
        <div className="text-slate-50 w-[50%] flex justify-center items-center bg-slate-800 font-[Inter]">
          <div className="px-10">
            <h1 className="text-3xl">Translation and interpretation</h1>
            <p className=" text-xl ">
              {" "}
              Polydioms guarantees high-quality translation and interpretation
              services. All translations are verified and reviewed by a
              professional translation team of sworn translators and linguists.
              Translation and proofreading are available in multiple languages.
            </p>
          </div>
        </div>
        <div className=" w-[50%] flex justify-center items-center bg-slate-100 bg-no-repeat bg-center bg-cover">
          <picture className=" h-full flex justify-center items-center">
            <img
              alt="translation"
              className="w-[80%]"
              src={
                "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2F2-people-on-a-table.avif"
              }
            />
          </picture>
        </div>
      </div>
      <div className="lg:h-[100vh] flex flex-row-reverse">
        <div className="text-slate-50 w-[50%] flex justify-center items-center bg-slate-800 font-[Inter]">
          <div className="px-10 flex justify-evenly flex-col items-start h-full">
            <h1 className="text-5xl font-[Inter] font-extrabold">
              Consulting in Intercultural Communication and Management
            </h1>
            <p className="text-xl ">
              <p className="">
                {" "}
                In a diversity of cultures and languages, it is important to
                know how to navigate in order to adapt to different
                environments. Our consultants are professionals in international
                and intercultural communication and management.
              </p>
              <p>
                They have several years of experience in their field and offer a
                great expertise. They will walk you through your goal sets,
                raising awareness of cultural differences and how to
                successfully address them.
              </p>
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center bg-slate-100 bg-no-repeat bg-center bg-cover">
          <picture className="h-full flex justify-center items-center">
            <img
              alt="translation"
              className="h-[80%]"
              src={
                "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fconsulting.avif"
              }
            />
          </picture>
        </div>
      </div>
    </>
  );
}
