import AnnouncementBar from "../components/layout/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/layout/Navbar/Navbar";
import HeroCarousel from "../components/home/HeroCarousel/HeroCarousel";



const HomePage = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <HeroCarousel />
      </main>

      {/* Footer */}
      
    </>
  );
}
export default HomePage;