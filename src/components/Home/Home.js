import React from "react";
import { Link } from "react-router-dom";
import Slider from "./BannerSection/Slider";
import BestSeller from "./BestSeller/BestSeller";
import GetInTouch from "./GetInTouch/GetInTouch";
import Header from "./Header/Header";
import NewCollection from "./NewCollection/NewCollection";
import OurStore from "./OurStore/OurStore";
import Customization from "./PerfumeCustomization/Customization";
import PremiumAd from "./PremiumAd/PremiumAd";

const images = [
  "../../../logo.svg",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
];
function Home() {
  return (
    <div>
      <Header />
      <div>{/* <Slider slides={images} /> */}</div>

      <BestSeller />
      <NewCollection />
      <PremiumAd />
      <div>
        <OurStore />
      </div>
      <Customization />
      <GetInTouch />
    </div>
  );
}

export default Home;
