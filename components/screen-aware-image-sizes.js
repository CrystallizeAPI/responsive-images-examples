import { useState } from "react";

export default function ScreenAwareImageSizes() {
  const [currentSrc, setCurrentSrc] = useState();

  return (
    <>
      <picture>
        {/* Mobile  */}
        <source
          media="(max-width: 767px)"
          srcSet="/static/screen-aware/speed-one-karma-yellow-mobile.jpg"
          type="image/jpg"
        />

        {/* Tablet  */}
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet="/static/screen-aware/speed-one-karma-yellow-tablet.jpg"
          type="image/jpg"
        />

        {/* Desktop */}
        <source
          media="(min-width: 1024px)"
          srcSet="/static/screen-aware/speed-one-karma-yellow-desktop.jpg"
          type="image/jpg"
        />

        {/* Default fallback */}
        <img
          src="/static/screen-aware/speed-one-karma-yellow-desktop.jpg"
          alt="Speed one karma yellow bicycle on a black wall with a girl sitting next to it"
          onLoad={(e) => setCurrentSrc(e.target.currentSrc)}
        />
      </picture>
      <p>{currentSrc}</p>
    </>
  );
}
