import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import Banner from "saleSections/banner";
import Workflow from "saleSections/workflow";
import Faq from "saleSections/faq";
import Partners from "saleSections/partners";
import { NextSeo } from "next-seo";
import Head from "next/head";

const data = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Flash Sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "  <div>\n        <p>\n          Flash sales are offered by an eCommerce store for the promotion of\n          their products. These flash sales are offered for a short period to\n          increase their sales and user base. During these sales, you can get\n          discounts or promotions for a short period to increase short-term\n          sales. Many times you can get products in Rs 1 too under 1Rs Flash\n          Sale.\n        </p>\n        <p>\n          In India, we can see these flash sales on eCommerce websites like\n          Amazon, Flipkart, Mi, Honor, etc. But there is no such rule to get a\n          product with some discount during these sales as we can see flash\n          sales happening for new products these days especially smartphones and\n          online gadgets.\n        </p>\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "How to buy a Product in Flash Sale using ChromeXT Extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "  <div>\n        <p>\n          Flash sales have gained so much popularity these days in India and the\n          rest of the world. There are so many websites hosting flash sales for\n          newly launched products and the promotion of their products. So you\n          need a flash sale extension to buy or book these products as the\n          quantity is too low and the number of users is too high. You can\n          follow the following steps for any flash sale happening on any\n          website.\n        </p>\n\n        <ol>\n          <li>Install the ChromeXT Flash Sale Extension.</li>\n          <li>Pin the extension in Chrome and then click on it.</li>\n          <li>Click on the product which you have to book in flash sale.</li>\n          <li>\n            You will be redirected to the sale page where the flash sale is\n            hosted.\n          </li>\n          <li>\n            The extension will automatically start refreshing your page and the\n            product will be added to your cart.\n          </li>\n          <li>\n            Once the product gets added, make the payment and your booking is\n            done.\n          </li>\n        </ol>\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "Why Choose ChromeXT over other Flash Sale Extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "   <div>\n        <p>\n          Yes, there are so many flash sale extensions that are already in the\n          market. So obviously users need a valid reason to use a new extension\n          that is providing the same service. You can check the following points\n          (the service which we provide for our users) which you will not find\n          on any other extensions.\n        </p>\n        <ul>\n          <li>\n            We are in the flash sale market for 6+ years and we have seen the\n            ups & downs in the flash sale. Many a time users were paying money\n            to some other fellow to book the product for them as they were\n            unable to book the product. This made us start a Flash Sale\n            Extension of our own to give all the power to our users.\n          </li>\n          <li>\n            You can START & STOP the script at will (this will help when the\n            timing of the sale changes suddenly).\n          </li>\n          <li>\n            You can use the extension in different tabs at the same time for\n            different stores (if a product is sold on 3 different websites, you\n            can try on all 3 in different tabs).\n          </li>\n          <li>\n            We just redirect you to the respective websites which are hosting\n            the flash sale. So the extension is completely safe.\n          </li>\n          <li>\n            You can talk with the developer directly if you find any issues with\n            the extension.\n          </li>\n          <li>\n            We guarantee you 99.99% booking in every flash sale ( unless the\n            product listing is too less).\n          </li>\n        </ul>\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "How to buy Flash Sale on Amazon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "   <div>\n        As of now, we can see so many flash sales happening on these eCommerce\n        websites. Amazon is a website that users trust and use for more of their\n        shopping. Most of the time this makes flash sales more competitive as\n        every user wants to book the product in Amazon Flash Sale. But with\n        ChromeXT Amazon Flash Sale Extension you can book these products almost\n        all the time. You can check the steps to use the extension above.\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "How to buy Flash Sale on Flipkart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "  <div>\n        Flipkart hosts a lot of flash sales from different brands. There are so\n        many users already in India who are booking products in the Flipkart\n        Flash Sale. We provide a Flipkart Flash Sale Extension which will help\n        you in booking any products in flash sale from Flipkart. With ChromeXT\n        you can have guaranteed booking in any flash sale hosting on the\n        website.\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "Are Flash Sales real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "  <div>\n        Yes, flash sales are real. Most of the sites host flash sales to get\n        more users on the website by adding a small number of products. But yes\n        most of the flash sales are real. With ChromeXT you can be sure that we\n        will be covering the right flash sales.Yes, flash sales are real. Most\n        of the sites host flash sales to get more users on the website by adding\n        a small number of products. But yes most of the flash sales are real.\n        With ChromeXT you can be sure that we will be covering the right flash\n        sales.\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "Do Online Stores really sell products in 1Rs Flash Sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "   <div>\n        Yes, they do. But what do you think, why would any site sell any product\n        for just Rs1? They sell products in 1Rs flash sale but the number of\n        products added are way too less. So most of the time users are unable to\n        get the product in flash sale.\n      </div>",
      },
    },
    {
      "@type": "Question",
      name: "Is ChromeXT Flash Sale Extension Safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "  <div>\n        ChromeXT Flash Sale extension is completely safe either it is a Flipkart\n        Flash Sale Extension or Amazon Flash Sale Extension. We just help in\n        adding the product to the cart and redirect you to the respective\n        website. From there we are nowhere in the process\n      </div>",
      },
    },
  ],
};

const FlashSale = () => {
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      </Head>
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
