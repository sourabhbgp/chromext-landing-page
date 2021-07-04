import Banner from "saleSections/banner";
import Workflow from "saleSections/workflow";
import Faq from "saleSections/faq";
import Partners from "saleSections/partners";
import { NextSeo } from "next-seo";

const FlashSale = () => {
  return (
    <>
      <NextSeo
        title="Flash Sale Extension to Autobuy Products in Seconds - ChromeXT"
        description="Use this Flash Sale Extension to autobuy any product in Amazon, Flipkart, MI or any other sites in seconds."
      />
      <Banner />
      <Partners />
      <Workflow />
      <Faq />
    </>
  );
};

export default FlashSale;
