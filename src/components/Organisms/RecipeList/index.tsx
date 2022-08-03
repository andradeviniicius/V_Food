import { ChakraProvider, SimpleGrid, Box, Center } from "@chakra-ui/react";
import { RecipeCard } from "components/Atoms";
import database from "services/dummyDatabase.json";

const RecipeList = () => {
  return (
    <section className="recipeList">
      <SimpleGrid placeItems={"center"} columns={[1, 2, 3, 3]} spacing="40px">
        {database.recipes.map((recipe) => (
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
    </section>
  );
};
export default RecipeList;
