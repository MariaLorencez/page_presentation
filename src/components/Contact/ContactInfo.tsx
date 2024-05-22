'use client';
import { Button, Divider, Link } from "@nextui-org/react";
import { TfiYoutube } from "react-icons/tfi";
import { Element } from "react-scroll";

const ContactInfo = () => {
  return (
    <Element name="info" className="element">
      <div className="container mx-auto p-20 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-center gap-10 md:gap-40 text-center">
          <p>
            <Link
              href="mailto:contacto@marialorencez.com"
              className="text-foreground text-center"
              target="_blank"
            >
              contacto@marialorencez.com
            </Link>
          </p>
          <p>Tel: 222 265 1732</p>
        </div>
        <Divider />
        <div className="text-center">
          <Button
            as={Link}
            href="https://www.youtube.com/channel/UCpq-os3SH5EKXuEp-xvEZYw"
            target="_blank"
            isIconOnly
            size="lg"
            variant="ghost"
            color="primary"
            className="rounded-full"
          >
            <TfiYoutube size={"1.5rem"} />
          </Button>
        </div>
      </div>
    </Element>
  );
};

export default ContactInfo;
