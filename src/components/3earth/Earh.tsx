import React, { useState } from "react";
import earth from "./planet-earth.svg";
import earthInside from "./planet-earth-internal.svg";
import earthImgSurface from "./geology-earth.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Earth = (props: any) => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={earth}
        image1={earthInside}
        image2={earthImgSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="EARTH"
        overview="Third planet from the Sun and the only known planet 
        to harbor life. About 29.2% of Earth's surface is land with remaining
         70.8% is covered with water. Earth's distance from the Sun, physical
          properties and geological history have allowed life to evolve and thrive."
        internalStructure="Earth's interior, like that of the other terrestrial planets, 
        is divided into layers by their chemical or physical (rheological) properties. 
        The outer layer is a chemically distinct silicate solid crust, which is underlain
         by a highly viscous solid mantle."
        surfaceGeology="The total surface area of Earth is about 510 million km2. The continental
         crust consists of lower density material such as the igneous rocks granite and andesite.
          Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean
          floors."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
          border-blue-500 hover:border-transparent rounded text-left active:bg-purple-700 focus:bg-purple-700"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="0.99 days"
        revolution="365.26 days"
        radius="6,371"
        temperature="16"
      />
    </div>
  );
};

export default Earth;
