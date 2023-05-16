import Event from "./Event";
import { contentfulClient } from "@/utils/contentful";
import { Event as EventType } from "@/utils/contentful";
const data = [
  {
    id: "1",
    title: "PureBachata",
    date: "15.05.2024",
    task: "DJ",
    venue: "Tanzraum, Köln",
    image:
      "https://static.wixstatic.com/media/7430d5_cc19673139414c80bc56261cb5b202ca~mv2.jpg/v1/fit/w_2500,h_1330,al_c/7430d5_cc19673139414c80bc56261cb5b202ca~mv2.jpg",
    url: "Some Link",
  },
  {
    id: "2",
    title: "Bachata Congress",
    date: "15.05.2024",
    task: "Videographer",
    venue: "Hilton, Düsseldorf",
    image:
      "https://www.hiltonhotels.de/assets/img/hotels/DUSHITW_Hilton_Dusseldorf/preview-full-1.jpg",
    url: "Some Link",
  },
  {
    id: "3",
    title: "PureBachata",
    date: "15.07.2024",
    task: "DJ",
    venue: "Tanzraum, Köln",
    image:
      "https://static.wixstatic.com/media/7430d5_cc19673139414c80bc56261cb5b202ca~mv2.jpg/v1/fit/w_2500,h_1330,al_c/7430d5_cc19673139414c80bc56261cb5b202ca~mv2.jpg",
    url: "Some Link",
  },
];

async function getEvents() {
  const res = await contentfulClient.getEntries<EventType>({
    content_type: "event",
  });

  return res.items;
}

const Events = async () => {
  const d = await getEvents();

  return (
    <>
      <div id="events" className="py-[80px] container mx-auto px-2">
        <h2 className="text-red-400 uppercase text-center font-bold text-3xl md:text-5xl">
          Events
        </h2>
        <h3 className="text-gray-500 text-lg text-center md:text-2xl">
          Meine bevorstehenden Events
        </h3>
        <div className="mt-10 flex justify-center items-center">
          <ul>
            {d.map((el) => {
              const id = el.sys.id;
              const { title, date, address } = el.fields;

              const img = el.fields.img;
              console.log(img);
              // Create a new Date object from the UTC string
              const utcDate = new Date(date as string);

              // Get the local date and time in the desired format
              const options: object = {
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
                  title={title as string}
                  address={address as string}
                  date={localDateTime}
                  image={
                    "https:" +
                    "//images.ctfassets.net/rxd0koxfgufn/1cvpoEbT9YA2QRlgsosuU1/57de6feb0b203d730fb780f71f1b910b/tanzraum_rgb.png"
                  }
                  // venue={el.venue}
                  // url={el.url}
                  // image={el.image}
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
