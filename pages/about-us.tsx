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
      <div className="lg:h-[100vh] flex lg:flex-row w-full flex-col">
        <div className="lg:w-1/2 h-full">
          <div className="grid grid-cols-4 grid-rows-4 bg-slate-100 gap-4 justify-center items-center h-[100vh] p-10">
            <div className="h-full w-full bg-[#0d1b2a] row-span-2">1</div>
            <div
              className="h-full w-full bg-[#415a77] row-span-2 col-span-2 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/5238118/pexels-photo-5238118.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            >
              2
            </div>
            <div className="h-full w-full bg-[#33415c]  ">4</div>
            <div className="h-full w-full bg-[#2f4858]">5</div>
            <div className="h-full w-full bg-[#454955]">6</div>
            <div className="h-full w-full bg-[#454955]">7</div>

            <div
              className="h-full w-full bg-[#22333b] col-span-2 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            >
              7
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
      <div>
        <div className="flex flex-col lg:flex-row h-[100vh] justify-center items-center text-slate-50">
          <div className="h-[400px] w-[400px] bg-slate-400 m-10">
            <TiteDescription
              title="Title 1"
              description="Reiciendis harum distinctio quidem sint laboriosam, obcaecati
            officiis fugiat."
            />
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
          <div className="h-[400px] w-[400px] bg-slate-600 m-10">
            <TiteDescription
              title="Title 1"
              description="Reiciendis harum distinctio quidem sint laboriosam, obcaecati
            officiis fugiat."
            />
          </div>
          <div className="h-[400px] w-[400px] bg-slate-800 m-10">
            <TiteDescription
              title="Title 1"
              description="Reiciendis harum distinctio quidem sint laboriosam, obcaecati
            officiis fugiat."
            />
          </div>
        </div>
      </div>
    </>
  );
}
