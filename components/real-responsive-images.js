import { useState } from "react";

export default function RealResponsiveImages() {
  const [currentSrc, setCurrentSrc] = useState();

  return (
    <>
      <picture>
        <source
          sizes="100vw"
          srcSet="
              static/speed-one/jpg/speed-one-karma-yellow-350.jpg 350w, 
              static/speed-one/jpg/speed-one-karma-yellow-700.jpg 700w,
              static/speed-one/jpg/speed-one-karma-yellow-1000.jpg 1000w,
              static/speed-one/jpg/speed-one-karma-yellow-1200.jpg 1200w,
              "
          type="image/jpg"
        />
        <img
          src="static/jpg/speed-one/speed-one-karma-yellow-1200.jpg"
          alt="Speed one karma yellow bicycle on a black wall with a girl sitting next to it"
          onLoad={(e) => setCurrentSrc(e.target.currentSrc)}
        />
      </picture>
      <p>{currentSrc}</p>
    </>
  );
}
