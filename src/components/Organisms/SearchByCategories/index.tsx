import { MainButton } from "../../Atoms";
import { CategoriesList } from "../../Molecules";

import "./styles.scss";

const SearchByCategories = () => {
  return (
    <section className="searchCategories">
      <div className="searchCategories__content">
        <h2 className="searchCategories__title">Categories</h2>
        <MainButton btnExtraClass="searchCategories__button">View All</MainButton>
        <CategoriesList />
      </div>
    </section>
  );
};

export default SearchByCategories;
