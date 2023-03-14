import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCategoriesContext } from "../../Context/categoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
