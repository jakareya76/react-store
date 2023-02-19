import CategoryItem from "../category-item/Category-item";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} {...category} />;
      })}
    </div>
  );
};

export default Directory;