import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { ContactForm } from "@components/Contact";

const ContactProducts = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28"
      style={{
        backgroundImage: "url(/images/bg2.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className={`absolute inset-0 bg-secondary bg-opacity-40`}></div>
      <div className="container relative">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-white mb-4 text-center">
            Contáctanos para seguir los productos
          </p>
        </HoverGrowUnderline>
        <div className="flex justify-center px-14">
          <ContactForm isProduct />
        </div>
      </div>
    </div>
  );
};

export default ContactProducts;
