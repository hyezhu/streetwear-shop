import CategoryItem from "../category-item/category-item.component.jsx";
import "./categories.styles.scss";

export default function CategoriesList ({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

