import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import { Link } from "components/link";
const PrivacyPolicy = () => {
  return (
    <Box sx={styles.policy} id="policy">
      <Container sx={styles.container}>
        <Heading as="h1">Privacy Policy</Heading>
        <Text as="p">
          ChromeXT’s privacy policy and disclaimer were last updated and posted
          on Jun 7, 2021. It governs the privacy and governing terms of our
          website, located at chromeXT and it's extension.
        </Text>

        <Heading as="h2">What Information do we store?</Heading>

        <Text as="p">
          Any personal information you provide to us including and similar to
          your name and e-mail address will not be released, sold, or rented to
          any entities or individuals outside of chromext.app. We, hereby state
          that we won’t sell, share or provide your email ID to any 3rd party
          services. All the information will be solely kept with us and will
          only be used for sending weekly newsletters. We examine visitor’s
          behavior on the site, and use this data to further enhance the site’s
          UI for a more user-friendly experience.
        </Text>

        <Heading as="h2">Cookies</Heading>

        <Text as="p">
          A ‘Cookie’ is a ‘Non-Personal Information’ that is not personally
          identifiable to you and that we automatically collect when you access
          our website with a web browser. It is a small data text file that is
          placed in your browser and allows chromext.app to recognize you each
          time you visit this site. chromeXT does not use cookies to store
          visitor’s information. Third-party services such as Google Adsense and
          Google Analytics store cookies to track visitors and for better ad
          management. For any concern with a third party, please contact them
          directly.
        </Text>

        <Heading as="h2">External Links</Heading>

        <Text as="p">
          ChromeXT does provide links to other websites that are not under our
          direct control. Once you have left chromeXT and landed on another
          site, then it’s their privacy policy that comes into action. We won’t
          be able to control a user’s privacy on another site. We cannot also be
          held liable/accountable for any loss/damage occurring as a result of
          activity on another website.
        </Text>

        <Heading as="h2">Affiliates</Heading>

        <Text as="p">
          ChromeXT uses Amazon associates program for promoting products from
          Amazon through affiliate links. Whenever a user buys a product from
          those links, we earn a commission. However, we only suggest suitable
          products that have high ratings and positive reviews.
        </Text>

        <Heading as="h2">Privacy Policy Updates</Heading>

        <Text as="p">
          We reserve the right to modify this privacy policy at any time. You
          should review this Privacy Policy frequently. If we make material
          changes to this policy, we may notify you on our Website, by a blog
          post, by email, or by any method we determine. The method we chose is
          at our sole discretion. We will also change the “Last Updated” date at
          the beginning of this Privacy Policy. Any changes we make to our
          privacy policy are effective as of this Last Updated date and replace
          any prior Privacy Policies.
        </Text>

        <Heading as="h2">Questions About Privacy Policy and Disclaimer</Heading>

        <Text as="p">
          If you have any questions about our privacy practices or this policy,
          please
          <Link
            style={{
              color: "#0d9896",
              paddingLeft: 4,
              textDecoration: "underline",
            }}
            path="/contact"
          >
            contact us
          </Link>
          .
        </Text>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

const styles = {
  policy: {
    pt: ["80px", null, null, null, "100px", "150px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],

    h1: {
      fontSize: [6, null, null, "36px"],
      mb: ["15px", null, null, null, "20px"],
    },

    h2: {
      fontSize: [6, null, null, "18px"],
      mb: ["8px", null, null, null, "10px"],
    },

    p: {
      fontSize: [6, null, null, "16px"],
      mb: ["8px", null, null, null, "10px"],
    },
  },
};
