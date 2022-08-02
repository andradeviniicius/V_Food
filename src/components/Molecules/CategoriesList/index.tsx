import { CategoriesItem } from "../../Atoms";
import "./styles.scss";

const CategoriesList = () => {
  return (
    <div className="searchCategories__container">
      <ul className="searchCategories__list">
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
        <CategoriesItem categIcon={"Dessert"} categName={"dessert"} />
      </ul>
    </div>
  );
};

export default CategoriesList;
