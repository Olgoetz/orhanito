"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const links = ["dj", "about me", "events", "bookings"];
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = (val) => setNav(val);

  function renderLinks(styles, val) {
    return links.map((el) => (
      <li key={el} className={styles} onClick={() => handleNav(val)}>
        <Link href={`/#${el.split(" ").join("")}`}>{el}</Link>
      </li>
    ));
  }

  return (
    <>
      <div className="fixed z-50 flex w-full justify-between items-center bg-black text-white h-[80px] p-3">
        <Link href="/#top" scroll={true}>
          <Image
            alt="Logo"
            src="/logo_white.png"
            quality={100}
            className="cursor-pointer items-center ml-2"
            width={120}
            height={100}
          />
        </Link>

        <div>
          <ul className="hidden md:flex justify-between items-center w-[500px] h-full px-2">
            {renderLinks("uppercase", false)}
          </ul>
        </div>

        <div
          onClick={() => handleNav(!nav)}
          className=" text-white md:hidden z-10 cursor-pointer"
        >
          {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>

        {nav && (
          <div className="absolute top-0 left-0 bg-black w-full">
            <ul className="flex flex-col text-4xl justify-center gap-y-8 mb-5 items-center h-screen">
              {renderLinks("uppercase", false)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
