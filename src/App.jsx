import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { ArrowSection } from "./Components/ArrowSection";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Extra/Contact";
import { Footer } from "./Components/Footer";
import ContactMe from "./Components/ContactMe";
import Career from "./Components/Career";

const App = () => {
  return (
    <>
      <Header />
      <div className="px-10 bg-primary pt-28 sml:pt-0">
        <Hero />
        <ArrowSection />
        <About />
        <Career />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default App;
