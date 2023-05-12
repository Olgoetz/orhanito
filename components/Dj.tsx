import Image from "next/image";

const Dj = () => {
  return (
    <>
      <div id="dj" className="py-[80px]">
        <div className=" px-2 max-w-[1200px] mx-auto">
          <h2 className="text-red-400 uppercase font-bold text-3xl md:text-5xl">
            Dj
          </h2>
          <h3 className="text-gray-500 text-lg md:text-2xl">
            Meine Tätigkeit als DJ
          </h3>

          <div className="mt-5 grid md:grid-cols-2 gap-10">
            <div className="text-justify">
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
            <div className="mx-auto">
              <Image src="/dj.jpg" alt="DJ" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dj;
