import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Dj from "../components/Dj";
import AboutMe from "../components/AboutMe";
import Events from "../components/Events";
import Bookings from "../components/Bookings";
import Footer from "../components/Footer";
export const revalidate = 86400;

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Dj />
      <AboutMe />
      {/* @ts-expect-error Async Server Component */}
      <Events />
      <Bookings />
      <Footer />
    </>
  );
}

export default Home;
