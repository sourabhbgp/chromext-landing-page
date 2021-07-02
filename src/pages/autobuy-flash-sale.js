import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import Banner from "saleSections/banner";
import Features from "saleSections/features";
import Workflow from "saleSections/workflow";
import Faq from "saleSections/faq";
import Partners from "saleSections/partners";

const FlashSale = () => {
  return (
    <>
      <Banner />
      <Partners />
      {/* <Features /> */}
      <Workflow />
      <Faq />
    </>
  );
};

export default FlashSale;
