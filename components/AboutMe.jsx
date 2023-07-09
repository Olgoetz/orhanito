import Image from "next/image";

const Dj = () => {
  return (
    <div className="bg-black">
      <div id="aboutme" className="py-[80px] container mx-auto px-2 ">
        <h2 className="text-red-500 text-right uppercase font-bold text-3xl md:text-5xl">
          About Me
        </h2>
        <h3 className="text-gray-500 text-right text-lg md:text-2xl">
          A brief Biography
        </h3>

        <div className="mt-5 grid md:grid-cols-2 gap-10">
          <div className="mx-auto">
            <Image
              src="/portrait_bw.webp"
              alt="dj_orhanito-aboute_me"
              width={300}
              height={300}
            />
          </div>
          <div className="text-justify text-white">
            <p>
              When I am not DJing or dancing, I work as an IT network engineer
              at Deutsche Bahn.
            </p>
            <p>
              I have a passion for technology and enjoy exploring the
              intricacies of network systems. Outside of work, I have a love for
              culinary adventures and enjoy exploring different cuisines. From
              cozy local eateries to fine dining experiences, I appreciate good
              food and the joy it brings.
            </p>
            <p>
              When I need some downtime, I indulge in gaming, immersing myself
              in virtual worlds and challenging my skills. It's a perfect way to
              unwind and recharge my creative energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dj;
