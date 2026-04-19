import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Experience } from "./components/Experience";
import { Location } from "./components/Location";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      <div style={{ padding: '40px', fontSize: '32px', color: 'black' }}>

      App works

      </div>
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
      <CTA />
      <Footer />
    </div>
  );
}