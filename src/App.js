import "./App.css";
import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router-dom";

const Offer = React.lazy(() => import("./pages/Offer"));
const Navbar = React.lazy(() => import("./components/Layout/Navbar/Navbar"));
const Footer = React.lazy(() => import("./components/Layout/Footer"));
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Terms = React.lazy(() => import("./pages/Terms"));

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  console.log(isMobile);
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar isMobile={isMobile} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Offer isMobile={isMobile} />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/regulamin" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
