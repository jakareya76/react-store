import { useProductsContext } from "../../Context/productsContext";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useProductsContext();

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Shop;
