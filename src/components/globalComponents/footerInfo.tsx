export const FooterInfo = (props: any) => {
  return (
    <div className="footerInfo w-full  flex justify-center">
      <div
        className="information w-[88%]  flex space-x-5 items-left justify-between
      p-10"
      >
        <div className="rotation border border-slate-600 p-5 w-3/12 leading-loose">
          <p className="infoParagraph text-xs text-stone-300">ROTATION TIME</p>
          <span className="infoSpan text-4xl">{props.rotation}</span>
        </div>
        <div className="revolution border border-slate-600 p-5 w-3/12 leading-loose">
          <p className="infoParagraph text-xs text-stone-300">
            REVOLUTION TIME
          </p>
          <span className="infoSpan text-4xl">{props.revolution}</span>
        </div>
        <div className="radius border border-slate-600 p-5 w-3/12 leading-loose">
          <p className="infoParagraph text-xs text-stone-300">radius</p>
          <span className="infoSpan text-4xl">{props.radius} km</span>
        </div>
        <div className="temperature border border-slate-600 p-5 w-3/12 leading-loose">
          <p className="infoParagraph text-xs text-stone-300">AVERAGE TEMP</p>
          <span className="infoSpan text-4xl">{props.temperature}°c</span>
        </div>
      </div>
    </div>
  );
};
