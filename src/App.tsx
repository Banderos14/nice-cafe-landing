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
import { BeanScene } from "./components/sections/BeanScene/BeanScene";
import { BeanStage } from "./components/sections/BeanScene/BeanStage";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {/* Fixed 3D canvas — warm beige background + bean, always behind content */}
      <BeanScene />

      {/*
        Scroll flow.
        - BeanStage = transparent spacer → fixed canvas visible through it
        - Content sections = opaque backgrounds → hide canvas, show content
        The rhythm: bean → content → bean → content → …
      */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* 1. Hero — own dark background, covers canvas */}
        <Hero />

        {/* 2. First encounter with the bean */}
        <BeanStage height="110vh" />

        {/* 3. Story */}
        <About />

        {/* 4. Bean between blocks */}
        <BeanStage height="90vh" />

        {/* 5. Menu */}
        <Menu />

        {/* 6. Bean between blocks */}
        <BeanStage height="90vh" />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. Bean between blocks */}
        <BeanStage height="90vh" />

        {/* 9. Experience */}
        <Experience />

        {/* 10. Final bean stage before location */}
        <BeanStage height="90vh" />

        {/* 11. Location */}
        <Location />

        {/* 12. CTA + Footer — own dark backgrounds */}
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
