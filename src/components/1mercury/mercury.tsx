import React, { useState } from "react";
import mercury from "./planet-mercury.svg";
import mercuryInsideImg from "./planet-mercury-internal.svg";
import mercuryImgSurface from "./geology-mercury.png";
import { FooterInfo } from "../globalComponents/footerInfo";
import { PlanetImage } from "../globalComponents/planetImage";
import { Overview } from "../globalComponents/overview";

const Mercury = (props: any) => {
  const [selectedItem, setSelectedItem] = useState(1);
  console.log(selectedItem, "selecteditem mercury");

  return (
    <div className="mercParent text-white flex flex-wrap">
      <PlanetImage
        image={mercury}
        image1={mercuryInsideImg}
        image2={mercuryImgSurface}
        selectedItem={selectedItem}
      />
      <Overview
        name="MERCURY"
        overview=" Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets
        in the Solar System, and is a rocky body like Earth."
        internalStructure="Mercury appears to have a solid silicate crust and mantle 
        overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, 
        and a solid inner core. The planet's density is the second highest in the Solar 
        System at 5.427 g/cm3 , only slightly less than Earth's density."
        surfaceGeology="Mercury's surface is similar in appearance to that of the Moon, 
        showing extensive mare-like plains and heavy cratering, indicating that it has 
        been geologically inactive for billions of years. It is more heterogeneous than 
        either Mars's or the Moons."
        className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border 
        border-blue-500 hover:border-transparent rounded text-left active:bg-blue-700 focus:bg-blue-700"
        setSelectedItem={setSelectedItem}
      />
      <FooterInfo
        rotation="58.6 days"
        revolution="87.97 days"
        radius="2439.7"
        temperature="430"
      />
    </div>
  );
};

export default Mercury;
