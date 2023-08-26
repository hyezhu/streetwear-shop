import CategoryItem from "../category-item/category-item.component.jsx";
import { CategoriesContainer } from "./categories.styles.jsx";

export default function CategoriesList({ categories }) {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}
