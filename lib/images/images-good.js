
export const images = {
  featured: (
    <picture>
      <source
        sizes="50vw"
        srcSet="
          /static/featured/webp/deep-bicycle-featured-w_250.webp 250w,
          /static/featured/webp/deep-bicycle-featured-w_384.webp 384w,
          /static/featured/webp/deep-bicycle-featured-w_512.webp 512w,
          /static/featured/webp/deep-bicycle-featured-w_1200.webp 1200w"
        type="image/webp"
        /> 
      <source
        sizes="50vw"
        srcSet="
          /static/featured/jpg/deep-bicycle-featured-w_250.jpg 250w,
          /static/featured/jpg/deep-bicycle-featured-w_384.jpg 384w,
          /static/featured/jpg/deep-bicycle-featured-w_512.jpg 512w,
          /static/featured/jpg/deep-bicycle-featured-w_1200.jpg 1200w"
        type="image/jpg" />
        <img src="/static/featured/jpeg/deep-bicycle-featured-w_1200w.jpg" alt="Deep Bicycle" /> 
    </picture>
  ),
  speed: (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet="/static/speed-one/speed-one-mobile.webp"
        type="image/webp"
      /> 
      <source
        media="(min-width: 768px)"
        srcSet="/static/speed-one/speed-one-desktop.webp"
        type="image/webp"
      /> 
      <img src="/static/speed-one/speed-one-mobile.jpeg" alt="Deep Bicycle" />     
    </picture>
  ),
  gallery: {
    image1: <img src="/static/gallery/image1.jpg" alt="Person standing next to bike" />,
    image2: <img src="/static/gallery/image2.jpg" alt="Two persons riding bikes down town in traffic" />,
    image3: <img src="/static/gallery/image3.jpg" alt="Person with white hair form behind" />,
    image4: <img src="/static/gallery/image4.jpg" alt="Black bike on white background" />,
    image5: <img src="/static/gallery/image5.jpg" alt="Black bike on black background" />
  }
};
export default images;
