export default function GridMinimal() {
  return (
    <div className="w-full h-[500px] lg:w-1/2 lg:h-full flex items-center justify-center lg:justify-end lg:items-center">
      <div className=" grid grid-cols-2  items-stretch gap-4 h-[80%] lg:w-[80%] w-[100%] ease-in ">
        <div className="bg-slate-200 row-span-2  scale-90 ease-in-out transition-all">
          <div
            className="h-full bg-center bg-cover animate-infinite-opacity transition-all ease-in"
            style={{
              backgroundImage:
                "url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fdecorating-component%2Fwomen-by-the-river.avif')",
            }}
          />
        </div>
        <div className="bg-slate-500 transition-all">
          <div
            className="bg-center bg-cover h-full animate-infinite-opacity animation-delay-6000"
            style={{
              backgroundImage:
                "url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fdecorating-component%2Fguy-in-paris.avif')",
            }}
          />
        </div>
        <div className="bg-slate-300 row-span-2 bg-center bg-cover scale-90  transition-all">
          <div
            className="bg-center bg-cover h-full animate-infinite-opacity animation-delay-5000"
            style={{
              backgroundImage:
                "url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fdecorating-component%2Fasian-talking-forest.jpg')",
            }}
          />
        </div>
        <div className="bg-slate-700 bg-cover bg-center scale-95  transition-all ">
          <div
            className="bg-center bg-cover h-full animate-infinite-opacity animation-delay-10000"
            style={{
              backgroundImage:
                "url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fdecorating-component%2Fwomen-inmeeting.webp')",
            }}
          />
        </div>
      </div>
    </div>
  );
}
