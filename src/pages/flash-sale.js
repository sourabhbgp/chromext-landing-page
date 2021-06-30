import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";

const FlashSale = () => {
  return (
    <Box sx={styles.flashSale} id="flash-sale">
      <Container sx={styles.container}>
        <div>
          <h1>Flash Sale Extension</h1>
          <p>
            100% Safe and Working ChromeXT extension for Flash Sale Auto-buy on
            all top popular sites like Amazon, Flipkart and Shop ATSC.
          </p>
        </div>
      </Container>

      <ul>
        <li>steps</li>
        <li>testimony</li>
        <li>faq</li>
      </ul>
    </Box>
  );
};

export default FlashSale;

const styles = {
  flashSale: {
    pt: ["80px", null, null, null, "100px", "150px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
};
