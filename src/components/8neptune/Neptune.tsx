import React, { useState } from "react";
import neptun from "./planet-neptune.svg";
import neptunInside from "./planet-neptune-internal.svg";
import neptunSurface from "./geology-neptune.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Neptune = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={neptun}
        image1={neptunInside}
        image2={neptunSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="NEPTUNE"
        overview="Neptune is the eighth and farthest-known Solar planet from the Sun. 
        In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive 
        planet, and the densest giant planet. It is 17 times the mass of E
        arth, more massive than its near-twin Uranus."
        internalStructure="Neptune's internal structure resembles that of Uranus. Its atmosphere 
        forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core.
         Increasing concentrations of methane, ammonia and water are found in the lower regions."
        surfaceGeology="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane 
        is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the 
        red and infrared portion of the spectrum."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
        border-blue-500 hover:border-transparent rounded text-left active:bg-blue-400 focus:bg-blue-400"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="16.08 Hours"
        revolution="164.79 Years"
        radius="24,622"
        temperature="-201"
      />
    </div>
  );
};

export default Neptune;
