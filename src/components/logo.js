import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/logo1.png";

export default function Logo() {
  // Handle Next.js static imports which return an object with src property
  const logoSrc = typeof logo === 'object' && logo?.src ? logo.src : logo;

  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image
        style={{ width: 150 }}
        src={logoSrc}
        sx={{ display: "flex" }}
        alt="startup landing logo"
      />
    </Link>
  );
}
