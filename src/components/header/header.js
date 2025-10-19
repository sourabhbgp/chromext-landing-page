import { jsx, Container, Flex, Box } from "theme-ui";
import Logo from "components/logo";
import Link from "next/link";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            <Link href="/" style={styles.nav.navLink}>
              Home
            </Link>

            <Link href="/autobuy-flash-sale/" style={styles.nav.navLink}>
              Flash Sale
            </Link>

            <Link href="/contact/" style={styles.nav.navLink}>
              Contact Us
            </Link>

            <Link href="/privacy-policy/" style={styles.nav.navLink}>
              Privacy Policy
            </Link>
          </Flex>

          {/* <Link
            path="/"
            ml={2}
            label="Register Now"
            sx={styles.headerBtn}
            variant="buttons.primary"
          /> */}

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    padding: "8px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    ml: "auto",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      textDecoration: "none",
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      marginRight: "48px",
      transition: "500ms",
      ":lastChild": {
        marginRight: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
};
