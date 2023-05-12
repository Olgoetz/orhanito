"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const links = ["dj", "videographer", "events", "bookings"];
import Image from "next/image";
function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = (val: boolean) => setNav(val);

  function renderLinks(styles: string, val: boolean) {
    return links.map((el) => (
      <li key={el} className={styles} onClick={() => handleNav(val)}>
        <Link href={`/#${el}`}>{el}</Link>
      </li>
    ));
  }

  return (
    <>
      <div className="fixed z-50 flex w-full justify-between items-center bg-black text-white h-[80px] p-3">
        <Link href="/">
          <Image
            alt="Logo"
            src="/logo.png"
            quality={100}
            className="cursor-pointer"
            width={280}
            height={200}
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
            <ul className="flex flex-col text-xl justify-center gap-6 items-center h-screen px-2">
              {renderLinks("uppercase", false)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
