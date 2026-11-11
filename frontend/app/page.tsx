import AnnouncementBar from "../components/layout/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/layout/Navbar/Navbar";
import HeroCarousel from "../components/home/HeroCarousel/HeroCarousel";
import About from "../components/About/About";
import ShopByCategory from "../components/home/ShopByCategory/ShopByCategory";
import NewArrivals from "@/components/home/NewArrivals/NewArrivals";



const HomePage = () => {
  return (
    <>
      <header>
        <AnnouncementBar />
        <Navbar />
      </header>

      <main>
        <HeroCarousel />
        <About />
        <ShopByCategory />
        <NewArrivals />
      </main>

      {/* Footer */}

    </>
  );
}
export default HomePage;