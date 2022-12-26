import "./App.css";
import Card from "./components/UI/Card1";
import kosiarka from "./assets/kosiarka.png";
import Hero from "./components/Layout/Hero";
import Navbar from "./components/Layout/Navbar";

const PRODUKTY = [
  {
    id: "m1",
    title: "Maszyna 1",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
  },
  {
    id: "m2",
    title: "Maszyna 2",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
  },
  {
    id: "m3",
    title: "Maszyna 3",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
  },
  {
    id: "m4",
    title: "Maszyna 4",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
  },
  {
    id: "m5",
    title: "Maszyna 5",
    img: kosiarka,
    priceForHour: "50zł",
    priceForDay: "200zł",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="itemsContainer">
        {/* {PRODUKTY.map((item) => {
          return (
            <Card
              title={item.title}
              id={item.id}
              img={item.img}
              priceForHour={item.priceForHour}
              priceForDay={item.priceForDay}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
