import Image from "next/image";

const Dj = () => {
  return (
    <>
      <div id="dj" className="py-20 container mx-auto px-2">
        <h2 className="text-red-500 uppercase font-bold text-3xl md:text-5xl">
          Dj
        </h2>
        <h3 className="text-gray-500 text-lg md:text-2xl">
          From a Dancer, for Dancers
        </h3>

        <div className="mt-5 grid md:grid-cols-2 gap-10">
          <div className="text-justify">
            <p>
              DJ Orhanito is not just a talented DJ but also a passionate
              dancer. With his motto
              <span className="text-red-500">
                {" "}
                &quot;From a Dancer, for Dancers&quot;{" "}
              </span>
              he brings a unique perspective to his music.
            </p>
            <p>
              Specializing in Bachata, he stays up to date with the latest
              trends in the scene, catering to the needs of dancers. With an
              exceptional sense of rhythm, DJ Orhanito creates energetic mixes
              that inspire and ignite dance floors worldwide.
            </p>
            <p>
              His creativity and innovation make him a sought-after DJ in the
              Bachata community, always delivering unforgettable musical
              experiences.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/dj.webp"
              alt="dj_orhanito-dj"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dj;
