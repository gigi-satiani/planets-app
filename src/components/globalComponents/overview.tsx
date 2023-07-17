import React, { useState } from "react";

export const Overview = (props: any) => {
  const [activeStage, setActiveStage] = useState(1);

  const handleClick = (stage: any) => {
    setActiveStage(stage);
    props.setSelectedItem(stage);
  };

  return (
    <div className="overview w-1/3  flex flex-col text-left pr-[7.9rem] pt-[5rem]">
      <div>
        <h2 className="text-[70px]">{props.name}</h2>

        {activeStage === 1 && (
          <p className="overviewParagraph pb-[1rem] h-[180px]">
            {props.overview}
          </p>
        )}
        {activeStage === 2 && (
          <p className="overviewParagraph pb-[1rem] h-[180px]">
            {props.internalStructure}
          </p>
        )}
        {activeStage === 3 && (
          <p className="overviewParagraph pb-[1rem] h-[180px]">
            {props.surfaceGeology}
          </p>
        )}

        <span className="overviewSPan text-[13px] text-[gray]">
          source :{"   "}
          <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">wikipedia</a>
        </span>
        <div className="buttonsParent flex flex-col pt-[1rem] gap-[15px]">
          <button onClick={() => handleClick(1)} className={props.className}>
            01 OVERVIEW
          </button>
          <button onClick={() => handleClick(2)} className={props.className}>
            02 INTERNAL STRUCTURE
          </button>
          <button onClick={() => handleClick(3)} className={props.className}>
            03 SURFACE GEOLOGY
          </button>
        </div>
      </div>
    </div>
  );
};
