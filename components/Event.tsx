import { MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";
import Image from "next/image";

type EventProps = {
  id: string;
  title: string;
  task: string;
  venue: string;
  date: string;
  url: string;
  image: string;
};
function Event({ id, title, venue, date, task, url, image }: EventProps) {
  return (
    <li
      key={id}
      className="flex md:h-[250px] w-[400px] md:w-[600px] gap-3 items-center shadow-xl round-lg p-3 my-3"
    >
      <div className="w-full">
        <Image
          className="md:mx-auto"
          src={image}
          alt={venue}
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-col md:ml-4 w-full gap-2">
        <h2 className="text-lg mt-1 md:text-2xl font-bold">{title}</h2>

        <div className="flex items-center justify-start md:justify-start gap-0.5">
          {task == "Videographer" ? (
            <BsCameraVideoFill size={20} className="mr-1" />
          ) : (
            <FaMusic size={20} className="mr-1" />
          )}
          <p className="font-bold">{task}</p>
        </div>
        <div className="flex items-center justify-start md:justify-start gap-0.5">
          <MdDateRange size={20} className="mr-1" />
          <time className="font-bold">{date}</time>
        </div>
        <div className="flex items-center justify-start md:justify-start gap-0.5 whitespace-pre">
          <GrLocation size={20} className="mr-1" />
          <address className="text-sm">{venue}</address>
        </div>
        <button className="bg-red-300 mx-auto justify-content w-full  text-black text-sm font-bold rounded-md px-3 py-1 mt-1">
          <a href={url} target="_blank" rel="noreferrer">
            Veranstaltungsseite
          </a>
        </button>
      </div>
    </li>
  );
}

export default Event;
