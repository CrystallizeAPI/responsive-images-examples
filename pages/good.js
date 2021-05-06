import React from "react";

import Head from "next/head";
import cssReset from "./../components/assets/style-reset";
import { Outer, Inner, Section } from "./../components/assets/styles";

import CrystallizeImageLib from "../components/crystallize-image-lib";

const Good = () => (
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
          <h1>Loading an image properly</h1>
          <CrystallizeImageLib />
        </Section>
      </Inner>
    </Outer>
  </>
);

export default Good;
