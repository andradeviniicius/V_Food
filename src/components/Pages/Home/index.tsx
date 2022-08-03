import {
  SearchByCategories,
  FeaturedRecipe,
  RecipeList,
} from "components/Organisms";

export default function Home() {
  return (
    <>
      <FeaturedRecipe />
      <SearchByCategories />
      <RecipeList />
    </>
  );
}
