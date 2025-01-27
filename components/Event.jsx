import { MdDateRange } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { FaMusic } from "react-icons/fa";
import Image from "next/image";

function Event({ id, title, image, address, date, link }) {
  return (
    <li
      key={id}
      className="flex flex-col md:flex-row md:h-[250px] max-w-[400px] md:w-[800px] md:max-w-[800px] gap-3 items-center shadow-xl round-lg p-3 my-3"
    >
      <div className="w-full">
        <Image
          className="md:mx-auto"
          src={image}
          alt="/"
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-col md:ml-4 w-full gap-2">
        <h2 className="text-lg mt-1 md:text-2xl font-bold">{title}</h2>

        {/* <div className="flex items-center justify-start md:justify-start gap-0.5">
          <FaMusic size={20} className="mr-1" />

          <p className="font-bold">DJ</p>
        </div> */}
        <div className="flex items-center justify-start md:justify-start gap-0.5">
          <MdDateRange size={20} className="mr-1" />
          <time className="font-bold">{date}</time>
        </div>
        <div className="flex items-center justify-start md:justify-start gap-0.5">
          <GrMapLocation size={20} className="mr-1" />
          <time className="font-bold">{address}</time>
        </div>
        {/* <div className="flex items-center justify-start md:justify-start gap-0.5 whitespace-pre">
          <GrLocation size={20} className="mr-1" />
          <address className="text-sm">{venue}</address>
        </div> */}
        <a href={link} rel="noreferrer">
          <button className="bg-red-500 mx-auto justify-content w-full  text-black text-sm font-bold rounded-md px-3 py-2 mt-1">
            Event
          </button>
        </a>
      </div>
    </li>
  );
}

export default Event;
