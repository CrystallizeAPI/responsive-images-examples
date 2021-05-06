import styled from "styled-components";
import Head from "next/head";
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
`;

export default function AdditionalImageProperties() {
  return (
    <>
      <Head>
        {/* Load the image first */}
        {/* <link
          rel="preload"
          as="image"
          href="https://media.crystallize.com/livestream-furniture-shop/21/5/6/1/@3200/mcgill-library-rs6e-eyn-x4-unsplash.webp"
          type="image/webp"
        /> */}
      </Head>
      <ImageContainer>
        {/* Load the resource immediately, regardless of where it's located on the page. */}
        <img
          src="https://media.crystallize.com/livestream-furniture-shop/21/5/6/1/@3200/mcgill-library-rs6e-eyn-x4-unsplash.webp"
          loading="eager"
        />

        {/* Defer loading of the resource until it reaches a calculated distance from the viewport. */}
        <img
          src="https://media.crystallize.com/livestream-furniture-shop/21/5/6/1/@3200/mcgill-library-rs6e-eyn-x4-unsplash.jpeg"
          loading="lazy"
        />
      </ImageContainer>
    </>
  );
}
