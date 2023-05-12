import Image from "next/image";

const Dj = () => {
  return (
    <>
      <div id="videographer" className="px-2 py-[80px] bg-black">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-red-300 text-right uppercase font-bold text-3xl md:text-5xl">
            Videographer
          </h2>
          <h3 className="text-gray-500 text-right text-lg md:text-2xl">
            Meine Tätigkeit als Videographer
          </h3>

          <div className="mt-5 grid md:grid-cols-2 gap-10">
            <div className="mx-auto">
              <Image
                src="/Videographer.jpg"
                alt="Videographer"
                width={600}
                height={600}
              />
            </div>
            <div className="text-justify text-white">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dj;
