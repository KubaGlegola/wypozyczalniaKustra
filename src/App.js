import "./App.css";
import Card from "./components/UI/Card1";
import kosiarka from "./assets/kosiarka.png";
import Hero from "./components/Layout/Hero";
import Navbar from "./components/Layout/Navbar";
import Producers from "./components/Layout/Producers";
import Footer from "./components/Layout/Footer";
import Offer from "./components/Layout/Offer";
import Contact from "./components/Layout/Contact";

const PRODUKTY = [
  {
    id: "m1",
    title: "Maszyna 1",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
  },
  {
    id: "m2",
    title: "Maszyna 2",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
  },
  {
    id: "m3",
    title: "Maszyna 3",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
  },
  {
    id: "m4",
    title: "Maszyna 4",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
  },
  {
    id: "m5",
    title: "Maszyna 5",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
    category: "ogród",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Producers />
      <Offer products={PRODUKTY} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
