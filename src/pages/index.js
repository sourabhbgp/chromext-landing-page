import React from "react";
import SEO from "components/seo";

import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import Feature from "sections/feature";
import CallToAction from "sections/call-to-action";
import BoostAgencies from "sections/boost-agencies";

export default function IndexPage() {
  return (
    <>
      <SEO
        title="ChromeXT - Shopper's Extension"
        description="We help online shoppers to be ahead of others with Autobuy Flash Sale Extension and provide features like Autoapply Coupons and Wishlist."
      />
      <Banner />
      <Services />
      <BoostAgencies />
      <Testimonials />
      {/* <Feature /> */}
      <CallToAction />
    </>
  );
}
