import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Footer } from "./components/layout/Footer/Footer";
import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Menu } from "./components/sections/Menu/Menu";
import { Gallery } from "./components/sections/Gallery/Gallery";
import { Experience } from "./components/sections/Experience/Experience";
import { Location } from "./components/sections/Location/Location";
import { CallToAction } from "./components/sections/CallToAction/CallToAction";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Experience />
      <Location />
      <CallToAction />
      <Footer />
    </div>
  );
}
