import React from "react";
import Head from "next/head";
import cssReset from "./../components/assets/style-reset";
import { Outer, Inner, Section } from "./../components/assets/styles";

const Bad = () => (
  <>
    <Head>
      <title>Responsive Images</title>
      <style dangerouslySetInnerHTML={{ __html: cssReset }} />
    </Head>
    <Outer
      css={`
        padding: 100px 0;
      `}
    >
      <Inner>
        <Section>
          <h1>Loading an image badly</h1>
          <img
            src="https://media.crystallize.com/livestream-furniture-shop/21/5/6/1/@3200/mcgill-library-rs6e-eyn-x4-unsplash.jpeg"
            loading="lazy"
          />
        </Section>
      </Inner>
    </Outer>
  </>
);

export default Bad;
