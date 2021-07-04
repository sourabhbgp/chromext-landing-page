import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title2";
import Accordion from "components/accordion/accordion";
import { FAQPageJsonLd } from "next-seo";
import { map } from "lodash";

const accordionData = [
  {
    isExpanded: false,
    title: "What are Flash Sales?",
    contents: `<div><p>Flash sales are offered by an eCommerce store for the promotion of their products. These flash sales are offered for a short period to increase their sales and user base. During these sales, you can get discounts or promotions for a short period to increase short-term sales. Many times you can get products in Rs 1 too under 1Rs Flash Sale.</p><p> In India, we can see these flash sales on eCommerce websites like Amazon, Flipkart, Mi, Honor, etc. But there is no such rule to get a product with some discount during these sales as we can see flash sales happening for new products these days especially smartphones and online gadgets. </p> </div>`,
  },
  {
    isExpanded: true,
    title: "How to buy a Product in Flash Sale using ChromeXT Extension?",
    contents: `<div> <p> Flash sales have gained so much popularity these days in India and the rest of the world. There are so many websites hosting flash sales for newly launched products and the promotion of their products. So you need a flash sale extension to buy or book these products as the quantity is too low and the number of users is too high. You can follow the following steps for any flash sale happening on any website. </p> <ol> <li>Install the ChromeXT Flash Sale Extension.</li> <li>Pin the extension in Chrome and then click on it.</li> <li>Click on the product which you have to book in flash sale.</li> <li> You will be redirected to the sale page where the flash sale is hosted. </li> <li> The extension will automatically start refreshing your page and the product will be added to your cart. </li> <li> Once the product gets added, make the payment and your booking is done. </li> </ol> </div>`,
  },
  {
    isExpanded: false,
    title: "Why Choose ChromeXT over other Flash Sale Extensions?",
    contents: `<div> <p> Yes, there are so many flash sale extensions that are already in the market. So obviously users need a valid reason to use a new extension that is providing the same service. You can check the following points (the service which we provide for our users) which you will not find on any other extensions. </p> <ul> <li> We are in the flash sale market for 6+ years and we have seen the ups & downs in the flash sale. Many a time users were paying money to some other fellow to book the product for them as they were unable to book the product. This made us start a Flash Sale Extension of our own to give all the power to our users. </li> <li> You can START & STOP the script at will (this will help when the timing of the sale changes suddenly). </li> <li> You can use the extension in different tabs at the same time for different stores (if a product is sold on 3 different websites, you can try on all 3 in different tabs). </li> <li> We just redirect you to the respective websites which are hosting the flash sale. So the extension is completely safe. </li> <li> You can talk with the developer directly if you find any issues with the extension. </li> <li> We guarantee you 99.99% booking in every flash sale ( unless the product listing is too less). </li> </ul> </div>`,
  },
  {
    isExpanded: false,
    title: "How to buy Flash Sale on Amazon?",
    contents: `<div> As of now, we can see so many flash sales happening on these eCommerce websites. Amazon is a website that users trust and use for more of their shopping. Most of the time this makes flash sales more competitive as every user wants to book the product in Amazon Flash Sale. But with ChromeXT Amazon Flash Sale Extension you can book these products almost all the time. You can check the steps to use the extension above. </div>`,
  },
  {
    isExpanded: false,
    title: "How to buy Flash Sale on Flipkart?",
    contents: `<div> Flipkart hosts a lot of flash sales from different brands. There are so many users already in India who are booking products in the Flipkart Flash Sale. We provide a Flipkart Flash Sale Extension which will help you in booking any products in flash sale from Flipkart. With ChromeXT you can have guaranteed booking in any flash sale hosting on the website. </div>`,
  },
  {
    isExpanded: false,
    title: "Are Flash Sales real?",
    contents: `<div> Yes, flash sales are real. Most of the sites host flash sales to get more users on the website by adding a small number of products. But yes most of the flash sales are real. With ChromeXT you can be sure that we will be covering the right flash sales.Yes, flash sales are real. Most of the sites host flash sales to get more users on the website by adding a small number of products. But yes most of the flash sales are real. With ChromeXT you can be sure that we will be covering the right flash sales. </div>`,
  },
  {
    isExpanded: false,
    title: "Do Online Stores really sell products in 1rs Flash Sale?",
    contents: `<div> Yes, they do. But what do you think, why would any site sell any product for just Rs1? They sell products in 1Rs flash sale but the number of products added are way too less. So most of the time users are unable to get the product in flash sale. </div>`,
  },
  {
    isExpanded: false,
    title: "Is ChromeXT Flash Sale Extension Safe?",
    contents: `<div> ChromeXT Flash Sale extension is completely safe either it is a Flipkart Flash Sale Extension or Amazon Flash Sale Extension. We just help in adding the product to the cart and redirect you to the respective website. From there we are nowhere in the process </div>`,
  },
];

const FAQ = () => {
  const faqSchema = (data) => {
    const final = [];
    map(data, (d) => {
      final.push({ questionName: d.title, acceptedAnswerText: d.contents });
    });
    return final;
  };

  return (
    <>
      <FAQPageJsonLd mainEntity={faqSchema(accordionData)} />
      <Box as="section" sx={styles.faq}>
        <Container>
          <BlockTitle
            title="Frequently Ask Question"
            text="Ask your question and meet"
          />
          <Flex sx={styles.flex}>
            <Box sx={styles.faqWrapper}>
              <Accordion items={accordionData} />
            </Box>
            <Box sx={styles.content}>
              <Heading as="h3">
                Do you have any quesiton? Please ask here we ready to support
              </Heading>
              <Text as="p">
                If your question is not listed here, feel free to ask @ChromeXT.
                We will come back to you within 12-24 hours with a working
                solution to your query
              </Text>
              <Link sx={styles.askButton} path="/contact/">
                Ask your Question
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default FAQ;

const styles = {
  faq: {
    pt: ["160px", null, null, null, null, null, "160px", "160px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
  },
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "primary",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "primary",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
