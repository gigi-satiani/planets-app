import { useState } from "react";
import saturn from "./planet-saturn.svg";
import saturnInsideImg from "./planet-saturn-internal.svg";
import saturnImgSurface from "./geology-saturn.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Saturn = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={saturn}
        image1={saturnInsideImg}
        image2={saturnImgSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="SATURN"
        overview="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, 
        after Jupiter. It is a gas giant with an average radius of about nine and a half times that of 
        Earth. It only has one-eighth the average density of Earth."
        internalStructure="Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in 
        the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which 
        is reached at a radius containing 99.9% of Saturn's mass."
        surfaceGeology="The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by
         volume. The planet's most famous feature is its prominent ring system, which is composed mostly of 
         ice particles with a smaller amount of rocky debris and dust."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
        border-blue-500 hover:border-transparent rounded text-left active:bg-yellow-900 focus:bg-yellow-900"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="10.8 hours"
        revolution="29.46 years"
        radius="58,232"
        temperature="-138"
      />
    </div>
  );
};

export default Saturn;
