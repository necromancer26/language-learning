const FillerSectionAI = () => {
  return (
    <section className="bg-slate-300 flex">
      <div className="container text-start lg:w-1/3 my-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {"Never too late to start learning"}
        </h2>
        <p className="text-slate-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        </p>
        <button className="bg-slate-900 btn text-white px-6 py-3 hover:bg-slate-700">
          Learn More
        </button>
      </div>
      <div className="lg:w-2/3 bg-bottom bg-cover bg-[url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fdesk-workspace.avif')]">
        <div className="bg-gradient-to-r from-slate-300 flex  bg-transparent h-full" />
      </div>
    </section>
  );
};

export default FillerSectionAI;
