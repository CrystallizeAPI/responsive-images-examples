import React from "react";
import Head from "next/head";

import cssReset from "./../components/assets/style-reset";
import { Outer, Inner, Section } from "./../components/assets/styles";
import SEOandImages from "./../components/seo-and-images";
import RealResponsiveImages from "./../components/real-responsive-images";
import ScreenAwareImages from "./../components/screen-aware-image-sizes";
import ModernImageFormats from "./../components/modern-image-formats";
import CrystallizeImageLib from "./../components/crystallize-image-lib";
import AdditionalImageProperties from "./../components/additional-image-properties";

const Index = () => (
  <>
    <Head>
      <title>Responsive Images</title>
      <style dangerouslySetInnerHTML={{ __html: cssReset }} />
    </Head>
    <Outer>
      <Inner>
        <Section>
          <h1>1. Seo image basics</h1>
          <SEOandImages />
        </Section>
        <Section>
          <h2>2. Responsive images with srcset and sizes</h2>
          <RealResponsiveImages />
        </Section>
        <Section>
          <h2>3. Screen aware image sizes</h2>
          <ScreenAwareImages />
        </Section>
        <Section>
          <h2>4. Modern image formats</h2>
          <ModernImageFormats />
        </Section>
        <Section>
          <h2>5. Crystallize image library </h2>
          <CrystallizeImageLib />
        </Section>
        <Section>
          <h2>6. Additional Image properties </h2>
          <AdditionalImageProperties />
        </Section>
      </Inner>
    </Outer>
  </>
);

export default Index;
