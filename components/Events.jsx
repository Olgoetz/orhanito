import Event from "./Event";
import getEvents from "../utils/api";

import React from "react";

const Events = async () => {
  const events = await getEvents();

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
              const id = el.sys.id;
              const { title, date, address } = el.fields;

              const img = "https:" + el.fields.img.fields.file.url;

              // Create a new Date object from the UTC string
              const utcDate = new Date();

              // Get the local date and time in the desired format
              const options = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              };

              const localDateTime =
                utcDate.toLocaleString("de-De", options) + " Uhr";

              //    console.log("https:" + img.fields.file.url);
              return (
                <Event
                  key={id}
                  id={id}
                  title={title}
                  address={address}
                  date={localDateTime}
                  image={img}
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
