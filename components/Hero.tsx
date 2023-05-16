"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function Hero() {
  return (
    <div>
      <div className="bg-black/30 absolute left-0 top-0 w-full h-screen z-10" />

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

      <div className="w-full relative z-20">
        <div className="flex flex-col justify-center h-screen text-center text-white w-full max-w-[800px] mx-auto">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              // repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <h1 className="text-6xl mt-[-96px] font-bold text-red-300">
              Hi, ich bin Orhan
            </h1>
            <p className="mt-10 text-2xl font-bold">Dein DJ für Dein Event</p>
          </motion.div>
          <button className="bg-red-300 text-black p-3 rounded-md w-[300px] mt-10 mx-auto">
            <a href="#bookings">Anfrage</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
