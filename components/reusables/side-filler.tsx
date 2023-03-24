import Image from "next/image";

export default function SideFiller() {
  return (
    <div className="h-[100vh] hidden w-1/3 bg-slate-900 fixed left-0 md:flex md:flex-col justify-center items-center gap-20 px-4">
      <Image
        src={
          "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2FLogo%2Fpolydioms-white.svg"
        }
        width={300}
        height={300}
        alt="logo"
      />
      <h1 className="text-white font-[Satisfy] text-[32px] text-center">
        {"Discover a new way to learn languages!"}
      </h1>
    </div>
  );
}
