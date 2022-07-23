import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "./BestSeller/BestSeller";
import Footer from "./Footer/Footer";
import GetInTouch from "./GetInTouch/GetInTouch";
import Header from "./Header/Header";
import Slider from "./ImageSlider/Slider";
import NewCollection from "./NewCollection/NewCollection";
import OurStore from "./OurStore/OurStore";
import Customization from "./PerfumeCustomization/Customization";
import PremiumAd from "./PremiumAd/PremiumAd";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <Slider />
      </div>

      <BestSeller />
      <NewCollection />
      <PremiumAd />
      <div id="perfumes">
        <OurStore />
      </div>
      <Customization />
      <div id="contact-us">
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
