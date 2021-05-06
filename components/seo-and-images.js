import styled from "styled-components";

const ImageContainer = styled.div`
  @media (max-width: 1024px) {
    height: 300px;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default function SEOandImages() {
  return (
    <>
      <ImageContainer>
        <img
          src="/static/screen-aware/speed-one-karma-yellow-desktop.jpg"
          alt="Speed one karma yellow bicycle on a black wall with a girl sitting next to it"
        />
      </ImageContainer>
    </>
  );
}
