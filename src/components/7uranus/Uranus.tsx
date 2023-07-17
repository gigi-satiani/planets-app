import { useState } from "react";
import uranus from "./planet-uranus.svg";
import uranusInsideImg from "./planet-uranus-internal.svg";
import uranusSurface from "./geology-uranus.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Uranus = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={uranus}
        image1={uranusInsideImg}
        image2={uranusSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="URANUS"
        overview="Uranus is the seventh planet from the Sun. Its name is a reference to the 
        Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather
         of Ares. It has the third-largest planetary radius and fourth-largest planetary mass 
         in the Solar System."
        internalStructure="The standard model of Uranus's structure is that it consists of three 
        layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle 
        and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass 
        of only 0.55 Earth masses."
        surfaceGeology="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of
         molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule 
         of gas, is 0.15±0.03 in the upper troposphere."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
        border-blue-500 hover:border-transparent rounded text-left active:bg-emerald-300 focus:bg-emerald-300"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="17.2 Hours"
        revolution="84 Years"
        radius="25,362"
        temperature="-195"
      />
    </div>
  );
};

export default Uranus;
