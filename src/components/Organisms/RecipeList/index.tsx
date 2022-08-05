import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "components/Atoms";
import database from "services/dummyDatabase.json";

import "./styles.scss";

const RecipeList = () => {
  return (
    <section className="recipeList">
      <ChakraProvider>
        <div className="recipeList__content">
          <h1 className="recipeList__title">Simple and Tasty Recipes</h1>
          <p className="recipeList__subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, magnam!
          </p>
          <SimpleGrid placeItems={"center"} columns={[1, 1, 3, 3]} spacingX="3%" spacingY={'20px'}>
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
        </div>
      </ChakraProvider>
    </section>
  );
};
export default RecipeList;
