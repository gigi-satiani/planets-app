import "../../App.css";

export const PlanetImage = ({ image, image1, image2, selectedItem }: any) => {
  return (
    <div className="planetImage w-2/3">
      <div className="textAndImage w-full">
        <figure className="planetImParent w-full flex justify-center relative items-center pt-[12rem]">
          <img
            src={image}
            className="planetImg w-1/4 relative object-fill"
            style={{
              display:
                selectedItem === 1 || selectedItem === 3 ? "block" : "none",
            }}
            alt="#"
          />
          <img
            src={image1}
            style={{ display: selectedItem === 2 ? "block" : "none" }}
            className="planetImg w-1/4"
            alt="#"
          />
          <img
            src={image2}
            className="planetImg planetImgeOuter w-32 absolute mt-80"
            style={{ display: selectedItem === 3 ? "block" : "none" }}
            alt="#"
          />
        </figure>
      </div>
    </div>
  );
};
