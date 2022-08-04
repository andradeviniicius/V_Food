import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "components/Atoms";
import database from "services/dummyDatabase.json";

import "./styles.scss";

const RecipeList = () => {
  return (
    <section className="recipeList">
      <h1 className="recipeList__title">Simple and Tasty Recipes</h1>
      <p className="recipeList__subTitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        magnam!
      </p>
      <ChakraProvider>
        <SimpleGrid placeItems={"center"} columns={[1, 2, 3, 3]} spacing="3%">
          {database.recipes.slice(0, 9).map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              description={
                "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
              }
              categorie={recipe.categorie}
              prepTime={recipe.prepTime}
            />
          ))}
        </SimpleGrid>
      </ChakraProvider>
    </section>
  );
};
export default RecipeList;
