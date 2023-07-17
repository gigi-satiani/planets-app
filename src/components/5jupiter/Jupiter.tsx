import React, { useState } from "react";
import jupiter from "./planet-jupiter.svg";
import jupiterInsideImg from "./planet-jupiter-internal.svg";
import jupiterImgSurface from "./geology-jupiter.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Jupiter = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={jupiter}
        image1={jupiterInsideImg}
        image2={jupiterImgSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="JUPITER"
        overview="Jupiter is the fifth planet from the Sun and the largest in the Solar 
        System. It is a gas giant with a mass two and a half times that of all the other 
        planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
        internalStructure="When the Juno arrived in 2016, it found that Jupiter has a very 
        diffuse core that mixes into its mantle. A possible cause is an impact from a planet 
        of about ten Earth masses a few million years afte
        r Jupiter's formation, which would have disrupted an originally solid Jovian core."
        surfaceGeology="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic 
        storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly 
        since 1665."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
        border-blue-500 hover:border-transparent rounded text-left active:bg-red-900 focus:bg-red-900"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="9.93 days"
        revolution="11.86 years"
        radius="69,911"
        temperature="-108"
      />
    </div>
  );
};

export default Jupiter;
