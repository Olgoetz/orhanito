import Navbar from "../../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div
        id="impressum"
        className="py-[80px] text-justify container mx-auto px-2"
      >
        <h1 className="text-red-400 text-left uppercase my-4 font-bold text-3xl md:text-5xl">
          Impressum
        </h1>
        <div className="mt-4 text-sm text-justify">
          <p className="font-bold">Information according to § 5 TMG</p>
          <br />
          <p>Orhan Kayan</p>
          <p>Louise-schröder-weg 4, 40789 Monheim</p>
          <p>o.kayan@gmx.net</p>
          <br />
          <p>
            <strong>Disclaimer</strong>
            <br />
            Liability for content The content of our pages was created with the
            utmost care. For the correctness, completeness and and topicality of
            the contents, however, we can not guarantee. As a service provider
            we are responsible for our own contents according to § 7 Abs.1 TMG.
            for own contents on these pages according to the general laws.
            According to §§ 8 to 10 TMG, however, we are not obligated as a
            service provider to monitor transmitted or stored information from
            third parties or to investigate or to investigate circumstances that
            indicate illegal activity. illegal activity. Obligations to remove
            or blocking the use of information in accordance with general laws
            remain unaffected. A liability in this respect is only possible from
            the time of knowledge of a concrete infringement. infringement is
            possible. If we become aware of any such infringement infringements,
            we will remove this content immediately. Liability for links mine
            offer contains links to external websites of third third parties, on
            whose contents we have no influence. Therefore we can therefore we
            cannot assume any liability for these external contents. For the
            contents of the linked pages is always the respective provider or
            operator operator of the pages is responsible. The linked pages were
            checked for possible legal violations at the time of linking.
            Illegal contents were not recognizable at the time of linking.
            recognizable at the time of linking. A permanent control of the
            contents of the linked pages is linked pages is not reasonable
            without concrete evidence of an infringement. not reasonable. If we
            become aware of any infringements of the law, we will immediately
            remove remove such links immediately.
          </p>
          <br />
          <p>
            <strong>Copyright</strong>
            <br />
            The content and works on these pages created by the site operators
            are on these pages are subject to German copyright law. The
            duplication, processing, distribution, or any form of
            commercialization use outside the limits of copyright law requires
            the written consent of the written consent of the respective author
            or creator. Downloads and copies of these pages are only permitted
            for private, non-commercial use. commercial use. As far as the
            contents on this not created by the operator, the copyrights of
            third parties are respected. copyrights of third parties. In
            particular, third-party content is identified as such. marked as
            such. Should you nevertheless become aware of a copyright
            infringement, we ask for an appropriate notice. appropriate notice.
            If we become aware of any infringements of the law we will remove
            such content immediately.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Page;
