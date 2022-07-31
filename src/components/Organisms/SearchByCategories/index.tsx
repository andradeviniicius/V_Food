import { MainButton } from "../../Atoms";
import { CategoriesList } from "../../Molecules";

const SearchByCategories = () => {
  return (
    <>
      <h2>Categories</h2>
      <MainButton>View All</MainButton>
      <CategoriesList />
    </>
  );
};

export default SearchByCategories;
