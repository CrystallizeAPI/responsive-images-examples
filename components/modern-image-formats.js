import { useState } from "react";

export default function modernImageFormats() {
  const [currentSrc, setCurrentSrc] = useState();

  return (
    <>
      <picture>
        <source
          sizes="100vw"
          srcSet="
            /static/speed-one/avif/speed-one-karma-yellow-350.avif 350w,
            /static/speed-one/avif/speed-one-karma-yellow-700.avif 700w,
            /static/speed-one/avif/speed-one-karma-yellow-1000.avif 1000w,
            /static/speed-one/avif/speed-one-karma-yellow-1200.avif 1200w"
          type="image/avif"
        />
        <source
          sizes="100vw"
          srcSet="
            /static/speed-one/webp/speed-one-karma-yellow-350.webp 350w,
            /static/speed-one/webp/speed-one-karma-yellow-700.webp 700w,
            /static/speed-one/webp/speed-one-karma-yellow-1000.webp 1000w,
            /static/speed-one/webp/speed-one-karma-yellow-1200.webp 1200w"
          type="image/webp"
        />
        <source
          sizes="100vw"
          srcSet="
          /static/speed-one/jpg/speed-one-karma-yellow-350.jpg 350w,
          /static/speed-one/jpg/speed-one-karma-yellow-700.jpg 700w,
          /static/speed-one/jpg/speed-one-karma-yellow-1000.jpg 1000w,
          /static/speed-one/jpg/speed-one-karma-yellow-1200.jpg 1200w,
        "
          type="image/jpg"
        />
        <img
          src="/static/speed-one/jpg/speed-one-karma-yellow-1200.jpg"
          alt="Speed one karma yellow bicycle on a black wall with a girl sitting next to it"
          onLoad={(e) => setCurrentSrc(e.target.currentSrc)}
        />
      </picture>
      <p>{currentSrc}</p>
    </>
  );
}
