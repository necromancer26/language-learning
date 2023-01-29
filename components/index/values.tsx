
export default function Values() {
  return (
    <div className=" lg:h-[50vh] bg-slate-900 flex text-slate-100 snap-center">
      <div className="flex justify-center items-center lg:w-1/2">
        <h2 className="mb-5 text-5xl font-bold  font-[spectral]">Our Values</h2>
      </div>
      <div className="lg:w-1/2 bg-slate-100 flex">
        <div className="lg:w-1/3 bg-slate-200 text-slate-800 flex justify-center items-center hover:flex-[2_2_0%] flex-1 transition-all">
          <h3 className="mb-5 text-5xl font-bold  font-[spectral]">
            Ethics<i className="fa-solid fa-globe text-5xl"></i>
          </h3>
        </div>
        <div className="lg:w-1/3 bg-slate-300 text-slate-800  flex justify-center items-center flex-1 hover:flex-[2_2_0%]  transition-all">
          <h3 className="mb-5 text-5xl font-bold  font-[spectral]">
            Trust<i className="fa-solid fa-globe text-5xl"></i>
          </h3>
        </div>
        <div className="lg:w-1/3 bg-slate-400  text-slate-800 flex justify-center items-center flex-1 hover:flex-[2_2_0%]  transition-all">
          <h3 className="mb-5 text-5xl font-bold  font-[spectral]">
            Quality<i className="fa-solid fa-globe text-5xl"></i>
          </h3>
        </div>
      </div>
    </div>
  );
}
