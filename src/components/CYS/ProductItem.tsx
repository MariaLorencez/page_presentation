import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const listProducts = [
  {
    title: "Frasco cristal ámbar de 30ml",
    subtitle: "(con goteros)",
    img: "/images/brand-enriched.webp",
    price: "$280 MXN",
  },
  {
    title: "Frasco gotero tipo oftálmico",
    subtitle: "30ml",
    img: "/images/brand-enriched.webp",
    price: "$250 MXN",
  },
  {
    title: "Frasco gotero tipo ofttálmico",
    subtitle: "60ml",
    img: "/images/brand-enriched.webp",
    price: "$450 MXN",
  },
  {
    title: "Frasco con pipeta de 120ml",
    img: "/images/products/4.webp",
    price: "$550 MXN",
  },
  {
    title: "Frasco con cuenta gotas de 125ml",
    img: "/images/products/5.webp",
    price: "$600 MXN",
  },
  {
    title: "Frasco de cristal 500ml",
    img: "/images/products/6.webp",
    price: "$800 MXN",
  },
];

const ProductItem = () => {
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {listProducts.map((item, index) => (
        <Card shadow="lg" radius="none" key={index}>
          <CardBody className="overflow-visible p-0 pb-4">
            <Image
              isBlurred
              shadow="sm"
              radius="none"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[300px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-lg flex flex-col">
            <div>
              <div className="text-center w-100">
                <p className="text-center">{item.title}</p>
                {item.subtitle && (
                  <b className="text-center">{item.subtitle}</b>
                )}
              </div>
              <HoverGrowUnderline underlineColor="bg-primary-500">
                <p className="mb-4">{item.price}</p>
              </HoverGrowUnderline>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductItem;
