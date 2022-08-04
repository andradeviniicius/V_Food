import {
  SearchByCategories,
  FeaturedRecipe,
  RecipeList,
  LearnMore
} from "components/Organisms";

export default function Home() {
  return (
    <>
      <FeaturedRecipe />
      {/* <SearchByCategories /> */}
      <LearnMore></LearnMore>
      <RecipeList />
    </>
  );
}
