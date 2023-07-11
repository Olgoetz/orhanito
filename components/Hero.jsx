"use client";
import { ImHeadphones } from "react-icons/im";
import Image from "next/image";
function Hero() {
  return (
    <div className="relative">
      <div className="bg-black/30 absolute left-0 top-0 w-full h-full z-10" />
      <Image
        alt="dj_orhanito-hero"
        src="/action_hero.webp"
        //  placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <div className="relative z-20 flex flex-col h-screen justify-center text-center text-white w-full max-w-[800px] mx-auto">
        <h1 className="text-6xl  font-bold text-red-500">
          I&apos;m DJ Orhanito{" "}
        </h1>
        <p className="mt-10 text-2xl font-bold">
          <ImHeadphones size={30} className="text-white inline-block mr-2" />{" "}
          Passionate Bachata DJ
        </p>
        <button className="bg-red-500 text-black p-3 rounded-md w-[500px] mt-10 mx-auto">
          <a href="#bookings">Book Me!</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
