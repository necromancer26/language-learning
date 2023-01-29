import Image from "next/image";
import { useState } from "react";
import AsianCountry from "../../assets/asian-country.jpg";

export default function DecoratingComponent() {
  // ${trigger && "top-[-5%] left-[65%]"}
  // ${trigger && "bottom-[-5%] right-[65%]"}
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="relative display h-[400px] w-[4`0px] lg:h-[500px] lg:w-[500px]">
      <div
        className={`absolute lg:h-[200px] lg:w-[200px] h-[170px] w-[170px] bg-slate-600 bg-center bg-cover z-0 top-[65%] left-[65%] transition-all `}
      />
      <div
        className="bg-cover bg-center absolute bg-black top-0 left-0 z-10 h-full w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
        }}
        onMouseEnter={() => setTrigger(true)}
        onMouseLeave={() => setTrigger(false)}
      ></div>
      <div
        className={`absolute lg:h-[200px] lg:w-[200px] h-[170px] w-[170px] bottom-[65%] right-[65%] bg-slate-400 bg-center bg-cover z-0 transition-all`}
      />
    </div>
  );
}
