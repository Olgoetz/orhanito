"use client";
import { useEffect, useState } from "react";
import { BiCopyright } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  const [currentDate, setCurrentDate] = useState<number>();

  useEffect(() => {
    let today = new Date();
    let year = today.getFullYear();
    setCurrentDate(year);
  }, []);
  return (
    <div className="px-2 py-10 bg-gray-300">
      <div className="grid md:grid-cols-3 gap-y-5 items-center text-center">
        <div>
          <h3 className="uppercase font-bold mb-2">Kontakt </h3>
          <div>
            <div className="flex justify-center items-center">
              <HiOutlineMail className="mr-3" size={30} />
              <p>mail@me.de</p>
            </div>
            <div className="flex justify-center items-center">
              <BsWhatsapp className="mr-3" size={30} />
              <p>+49 1122 3344455</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold mb-2">Social Media </h3>
          <div className="flex flex-col items-center">
            <AiOutlineInstagram size={30} />
            <AiOutlineFacebook size={30} />
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold mb-2">Sonstiges</h3>
          <p>Datenschutz</p>
          <p>Impressum</p>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <BiCopyright size={20} className="mr-1" />
        <p>{currentDate} Orhan K.</p>
      </div>
    </div>
  );
}

export default Footer;
