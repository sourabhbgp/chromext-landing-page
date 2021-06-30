/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/logo1.png";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image
        style={{ width: 150 }}
        src={logo}
        sx={{ display: "flex" }}
        alt="startup landing logo"
      />
    </Link>
  );
}
