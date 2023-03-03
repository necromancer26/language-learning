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
        <div className="lg:w-1/2 bg-slate-800 flex flex-col items-center justify-center text-slate-200 px-10 h-full">
          <h2 className=" text-5xl  my-10">We are a translation service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis
            et, aliquid quod porro alias facere doloribus unde quasi vitae dolor
            sapiente cumque dolorem, dignissimos voluptatibus at soluta eaque
            hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Reiciendis harum distinctio quidem sint laboriosam, obcaecati
            officiis fugiat quis aperiam sapiente voluptates eaque quae quisquam
            eum non pariatur? Modi, eius dicta! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Earum iste nesciunt ea sapiente
            harum, id ducimus repellat, veniam, maxime sed voluptates iusto sit
            illo minus quaerat consectetur magni. Expedita, soluta.
          </p>
        </div>
      </div>
    </>
  );
}
