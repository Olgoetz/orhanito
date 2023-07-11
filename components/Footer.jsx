"use client";
import { useEffect, useState } from "react";
import { BiCopyright } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let today = new Date();
    let year = today.getFullYear();
    setCurrentDate(year);
  }, []);
  return (
    <div className="bg-white">
      <div className="py-10 container mx-auto px-2">
        <div className="grid md:grid-cols-3 gap-y-5 items-center text-center">
          <div>
            <h3 className="uppercase font-bold mb-2">Contact</h3>
            <div>
              <div className="flex justify-center items-center">
                <HiOutlineMail className="mr-3" size={30} />
                <p>bookings@djorhanito.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-2">Social Media </h3>
            <div className="flex justify-center">
              <Link
                href="https://www.instagram.com/orhanitooo/"
                target="_blank"
                alt="instagram"
              >
                <div className="flex items-center">
                  <p className="text-red-500">djorhanito</p>
                  <AiOutlineInstagram size={30} />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-2">Miscellaneous</h3>
            <Link href="/dataprivacy#dataprivacy" scroll={true}>
              <p>Data Privacy</p>
            </Link>
            <Link href="/impressum#impressum" scroll={true}>
              <p>Impressum</p>
            </Link>
          </div>
        </div>
        <Link href="/#top" scroll={true}>
          <Image
            className="mx-auto mt-3"
            src="/logo_black.webp"
            alt="dj_orhanito-logo-black"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex mt-3 justify-center">
          <BiCopyright size={20} className="mr-1" />
          <p>{currentDate} Orhan K.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
