import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Dj from "@/components/Dj";
import Videographer from "@/components/Videographer";
import Events from "@/components/Events";
import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dj />
      <Videographer />
      <Events />
      <Bookings />
      <Footer />
    </>
  );
}

export default Home;
