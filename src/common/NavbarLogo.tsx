
import { scheherazade } from "@fonts";
import { NavbarContent, NavbarBrand, Image } from "@nextui-org/react";

const NavbarLogo = () => {
  return (
    <NavbarContent justify="center">
      <NavbarBrand className="gap-1">
        <Image
          src="/logo.webp"
          alt="logo"
          width={70}
          height={70}
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className={`${scheherazade.className} text-foreground text-2xl`}>
          MARÍA LORENCEZ
        </h1>
      </NavbarBrand>
    </NavbarContent>
  );
};

export default NavbarLogo;
