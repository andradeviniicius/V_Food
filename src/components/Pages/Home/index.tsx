import {
  SearchByCategories,
  FeaturedRecipe,
  RecipeList,
  LearnMore,
  Publicity,
} from "components/Organisms";

export default function Home() {
  return (
    <>
      <FeaturedRecipe />
      {/* <SearchByCategories /> */}
      <RecipeList />
      <LearnMore></LearnMore>
      <Publicity></Publicity>
    </>
  );
}
