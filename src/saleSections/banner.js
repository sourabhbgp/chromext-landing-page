/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button } from "theme-ui";
import TextFeature from "components/text-feature";
import {
  IoIosCheckmarkCircle,
  IoLogoChrome,
  IoMdPlay,
  IoIosPlayCircle,
} from "react-icons/io";
import Image from "components/image";

import CoreFeatureThumb from "assets/131.png";
import Briefcase from "assets/core-feature/briefcase.svg";
import Secure from "assets/core-feature/secure.svg";

const data = {
  subTitle: "Flash Sale",
  title: "Flash Sale Extension to autobuy any product in seconds",
  description:
    "Get your tests delivered at let home collect sample from the victory of the managements that",
  features: [
    // {
    //   id: 1,
    //   imgSrc: Briefcase,
    //   altText: "Smart Features",
    //   title: "Smart Features",
    //   text: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
    // },
    // {
    //   id: 2,
    //   imgSrc: Secure,
    //   altText: "Secure Contents",
    //   title: "Secure Contents",
    //   text: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
    // },
  ],
};

export default function CoreFeature() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={CoreFeatureThumb} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {/* {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))} */}
            {/* 
            <Text as="p" className="description" sx={styles.description}>
              {data.description}
            </Text> */}
            <Box as="ul" sx={styles.list}>
              <Text as="li">
                <IoIosCheckmarkCircle style={{ color: "#0d9896" }} />
                Manually Start and Stop Script anytime
              </Text>
              <Text as="li">
                <IoIosCheckmarkCircle style={{ color: "#0d9896" }} />
                99% chance of getting the product
              </Text>
              <Text as="li">
                <IoIosCheckmarkCircle style={{ color: "#0d9896" }} />
                Covered almost all Flash Sale Products
              </Text>
              <Text as="li">
                <IoIosCheckmarkCircle style={{ color: "#0d9896" }} />
                Highly Safe and Secure
              </Text>
            </Box>
            <div style={{ display: "flex" }}>
              <Button
                as="a"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                }}
                sx={styles.button}
                // href="https://bit.ly/3gHjXKr"
                target="_blank"
              >
                <IoLogoChrome style={{ fontSize: 24, marginRight: 8 }} /> ADD TO
                CHROME
              </Button>

              <Button
                as="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                }}
                sx={styles.button2}
                // href="https://bit.ly/3gHjXKr"
                target="_blank"
                disabled
              >
                <IoIosPlayCircle style={{ fontSize: 24, marginRight: 8 }} />
                Soon
              </Button>
            </div>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    pt: ["160px", null, null, null, null, null, "160px", "160px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 480, 520],
    pr: [0, null, "auto", null, null, 30],
    pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, "2.2"],
    color: "text_secondary",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    ml: ["25px", null, null, "0"],
    mb: ["10px"],
    // mt: ["30px"],
    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["flex-start", null, null, null, null, "flex-start"],
      fontSize: [1, null, 2, null, "18px"],
      color: "text_secondary",
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: "#DADADA",
        borderRadius: "50%",
        marginRight: ["10px"],
      },
    },
  },
  button: {
    fontSize: [1, null, null, null, 2, "16px"],
    mb: ["30px", null, null, null, null, "60px"],
    borderRadius: ["4px"],
    padding: ["12px 24px"],

    // ml: ["10px"],
    // width: ["auto", null, null, null, "180px"],
  },
  button2: {
    fontSize: [1, null, null, null, 2, "16px"],
    mb: ["30px", null, null, null, null, "60px"],
    borderRadius: ["4px"],
    padding: ["12px 24px"],
    background: "#eee",
    color: "primary",
    ml: "16px",
    border: "1px solid",
    borderColor: "#999999",
    opacity: 0.7,
    "&:hover": {
      boxShadow: "none",
    },
  },
};
