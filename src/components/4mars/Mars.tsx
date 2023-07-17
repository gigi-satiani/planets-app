import React, { useState } from "react";
import mars from "./planet-mars.svg";
import marsInside from "./planet-mars-internal.svg";
import marsSurface from "./geology-mars.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Mars = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={mars}
        image1={marsInside}
        image2={marsSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="MARS"
        overview="Mars is the fourth planet from the Sun and the second-smallest planet
         in the Solar System, being larger than only Mercury. In English, Mars carries 
         the name of the Roman god of war and is often referred to as the Red Planet."
        internalStructure="Like Earth, Mars has differentiated into a dense metallic core 
        overlaid by less dense materials. Scientists initially determined that the core is 
        at least partially liquid. Current models of its interior imply a core consisting 
        primarily of iron and nickel with about 16 to 17% sulfur."
        surfaceGeology="Mars is a terrestrial planet whose surface consists of minerals containing 
        silicon and oxygen, metals, and other elements that typically make up rock. The surface is 
        primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
        border-blue-500 hover:border-transparent rounded text-left active:bg-orange-700 focus:bg-orange-700"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="1.03 days"
        revolution="1.88 years"
        radius="3389.5"
        temperature="-28"
      />
    </div>
  );
};

export default Mars;
