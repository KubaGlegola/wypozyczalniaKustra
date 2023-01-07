import "./App.css";
import React, { useState, useEffect } from "react";
import kosiarka from "./assets/kosiarka.png";
import Hero from "./components/Layout/Hero";
import Navbar from "./components/Layout/Navbar/Navbar";
import Producers from "./components/Layout/Producers";
import Footer from "./components/Layout/Footer";
import Offer from "./components/Layout/Offer/Offer";
import Contact from "./components/Layout/Contact/Contact";
import Terms from "./components/Layout/Terms";
import OfferGrid from "./components/Layout/Offer/OfferGrid";

const PRODUKTY = [
  {
    id: "m1",
    title: "Maszyna 1",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
    isPromoted: true,
  },
  {
    id: "m2",
    title: "Maszyna 2",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "dom",
    isPromoted: false,
  },
  {
    id: "m3",
    title: "Maszyna 3",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
    isPromoted: true,
  },
  {
    id: "m4",
    title: "Maszyna 4",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
    isPromoted: true,
  },
  {
    id: "m5",
    title: "Maszyna 5",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "budowa",
    isPromoted: false,
  },
];

function App() {
  const [scrollUp, setScrollUp] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentScroll(window.scrollY);
      if (currentScroll > window.innerHeight / 4) {
        currentScroll > lastScroll ? setScrollUp(false) : setScrollUp(true);
      }
    };

    setLastScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScroll, lastScroll]);

  return (
    <div className="App">
      {scrollUp && <Navbar />}
      {/* <Hero />
      <Producers />
      <Offer products={PRODUKTY} />
      <Contact />
      <Terms />
      <Footer /> */}
      <OfferGrid />
    </div>
  );
}

export default App;
