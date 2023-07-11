import Event from "./Event";
import getEvents from "../utils/api";

import React from "react";

const Events = async () => {
  const events = await getEvents();
  events.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  return (
    <>
      <div id="events" className="py-[80px] container mx-auto px-2">
        <h2 className="text-red-500 uppercase text-center font-bold text-3xl md:text-5xl">
          Events
        </h2>
        <h3 className="text-gray-500 text-lg text-center md:text-2xl">
          My upcoming Events
        </h3>
        <div className="mt-10 flex justify-center items-center">
          <ul>
            {events.map((el) => {
              console.log("Showing event: ", el.fields.title);
              console.log(el);
              const id = el.sys.id;
              const { title, date, address, eventLink } = el.fields;

              const img = "https:" + el.fields.img.fields.file.url;

              const _date = new Date(date);

              const formattedDate = _date.toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              //    console.log("https:" + img.fields.file.url);
              return (
                <Event
                  key={id}
                  id={id}
                  title={title}
                  address={address}
                  date={formattedDate}
                  image={img}
                  link={eventLink}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Events;
