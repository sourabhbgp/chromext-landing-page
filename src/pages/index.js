import React from "react";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import CustomerSupport from "sections/customer-support";
import Feature from "sections/feature";
import VideoOne from "sections/video-one";
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
      {/* <VideoOne /> */}
      <Testimonials />
      {/* <CustomerSupport /> */}
      <Feature />
      <CallToAction />
    </>
  );
}
