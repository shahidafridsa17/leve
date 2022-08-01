import React, { useEffect } from "react";
import BestSeller from "./BestSeller/BestSeller";
import Footer from "./Footer/Footer";
import GetInTouch from "./GetInTouch/GetInTouch";
import Header from "./Header/Header";
import Slider from "./ImageSlider/Slider";
import NewCollection from "./NewCollection/NewCollection";
import OurStore from "./OurStore/OurStore";
import Customization from "./PerfumeCustomization/Customization";
import PremiumAd from "./PremiumAd/PremiumAd";
import { useDispatch } from "react-redux";
import { login } from "../../Helper Func/userSlice";

let data = [
  {
    id: "5461",
    name: "Beleza",
    description:
      "Product Details For the pleasant ones looking for opportunities to behold the heart of others close to theirs, Gul is a fragrance meant for the ones rooted in the planet and humanity beyond gender horizons. This unisex floral scent floats with Brazilian rosewood over squeezes of everything citric from Bergamot to Mandarin to Orange and lemon, lightly spiced with splashes of coriander and cardamom. As pure as the heart of the wearers, the potion finds a carpet of roses at its heart with hues of jasmine, Ylang-Ylang, and Lily-of-the-Valley at its center gracing the elegant stature. The base on woodsy notes with fluid lucidity of creamy vanilla and transparency of patchouli portrays the dignity of the human never left unnoticed. Finding yourself amidst the greens and the blues of nature, intertwined with happy souls, going the happy-go-lucky way, then Gul is what you’re missing on!",
    category: "French Perfume",
    product_size: [
      {
        price: "300",
        size: 30,
        size_type: "ml",
        image:
          "https://static.toiimg.com/thumb/msid-63080082,imgsize-293543,width-800,height-600,resizemode-75/63080082.jpg",
      },
    ],
  },
  {
    id: "5454461",
    name: "Closer",
    description: "product description",
    category: "French Perfume",
    product_size: [
      {
        price: "250",
        size: 30,
        size_type: "ml",
        image:
          "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
      },
      {
        price: "450",
        size: 50,
        size_type: "ml",
        image: "https://m.media-amazon.com/images/I/411ou0D-sFL.jpg",
      },
    ],
  },
  {
    id: "54844461",
    name: "Gul",
    description: "product description",
    category: "Khuld",
    product_size: [
      {
        price: "250",
        size: 30,
        size_type: "ml",
        image:
          "http://cdn.shopify.com/s/files/1/0616/7494/6800/products/hydra-100ml-01-656.jpg?v=1644998647",
      },
      {
        price: "450",
        size: 50,
        size_type: "ml",
        image:
          "https://www.chanel.com/images/w_0.51,h_0.51,c_crop/f_auto,w_512,h_512/paris-paris-les-eaux-de-chanel-eau-de-toilette-spray-4-2fl-oz--packshot-default-102440-8849829625886.jpg",
      },
    ],
  },
];

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("https://levefragrance.com/api/v1/web/products/", options)
      .then((response) => response.json())
      .then((json) => dispatch(login(json)))
      .catch((error) => alert("Connection Problem"));
  }, []);

  return (
    <div>
      <Header navlinks={true} />
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
      <Footer visible={true} />
    </div>
  );
}

export default Home;
