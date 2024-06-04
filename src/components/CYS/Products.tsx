import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { ProductItem } from ".";

const Products = () => {
  return (
    <div className="flex justify-center items-center py-28 px-4">
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-secondary mb-4 text-center">
            Productos
          </p>
        </HoverGrowUnderline>
        <p className="text-center mb-6">
          Una marca fuerte conecta de forma profunda con el ser. Por medio de
          experiencias musicales, se puede lograr ésta conexión.
        </p>
        <ProductItem />
      </div>
    </div>
  );
};

export default Products;
