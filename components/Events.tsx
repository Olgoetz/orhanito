import Event from "./Event";

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
const Events = () => {
  return (
    <>
      <div id="events" className="py-[80px] px-2 max-w-[1200px] mx-auto">
        <h2 className="text-red-300 uppercase text-center font-bold text-3xl md:text-5xl">
          Events
        </h2>
        <h3 className="text-gray-500 text-lg text-center md:text-2xl">
          Meine bevorstehenden Events
        </h3>
        <div className="mt-10 flex flex-col justify-center items-center">
          <ul>
            {data.map((el) => {
              return (
                <Event
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  task={el.task}
                  date={el.date}
                  venue={el.venue}
                  url={el.url}
                  image={el.image}
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
