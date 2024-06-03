"use client";
import { scheherazade } from "@fonts";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarLogo } from ".";

type MenuItem = {
  title: string;
  url: string;
};

const menuItems: MenuItem[] = [
  { title: "Inicio", url: "/" },
  { title: "Conciencia y salud", url: "/cys" },
  { title: "María Lorencez", url: "/marialorencez" },
  { title: "Experiencias", url: "/experiencias" },
  { title: "Proyectos", url: "/proyectos" },
  { title: "Galería", url: "/galeria" },
];

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <Navbar
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="fixed"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-4",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        menuItem: [
          "flex",
          "relative",
          "pb-4",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-2",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarLogo />
      <NavbarContent justify="end" className="hidden lg:flex uppercase">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={item.url === currentPath}
          >
            <Link href={item.url} className="text-xs text-foreground">
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem isActive={"/contacto" === currentPath}>
          <Button
            as={Link}
            color="secondary"
            href="/contacto"
            variant="solid"
            size="sm"
            className="rounded-none"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={item.url === currentPath}
          >
            <Link className="w-full text-xs text-foreground" href={item.url}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem isActive={"/contacto" === currentPath}>
          <Button
            as={Link}
            color="secondary"
            href="/contacto"
            variant="solid"
            size="sm"
          >
            Contacto
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
