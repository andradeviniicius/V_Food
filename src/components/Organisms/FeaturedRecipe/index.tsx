import { useRef } from "react";

import { FeaturedItem } from "./../../Molecules";
import { MainButton } from "./../../Atoms";
import database from "./../../../services/dummyDatabase.json";

import "./style.scss";

export default function FeaturedRecipe() {
  const featuredCarrousel = useRef<HTMLUListElement>(null);

  function scrollLeft() {
    const getScrollWidth = featuredCarrousel.current?.scrollWidth;
    if (getScrollWidth) {
      featuredCarrousel.current?.scrollBy(-(getScrollWidth / 3), 0);
    }
  }
  const scrollRight = () => {
    const getScrollWidth = featuredCarrousel.current?.scrollWidth;
    if (getScrollWidth) {
      featuredCarrousel.current?.scrollBy(getScrollWidth / 3, 0);
    }
  };

  return (
    <section className="featuredRecipe">
      <div className="featuredRecipe__content">
        <MainButton handleClick={scrollLeft}>
          {"<"}
        </MainButton>
        <ul ref={featuredCarrousel} className="featuredRecipe__list">
          {database.recipes.map((recipe: any, index: number) => {
            if (index < 3) {
              return (
                <FeaturedItem
                  key={index}
                  title={recipe.title}
                  description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure aliquid accusamus ut laborum soluta quasi distinctio. Excepturi, magnam? Sunt."
                  }
                  image={recipe.image}
                  category={recipe.categorie}
                  prepTime={recipe.prepTime}
                  author={recipe.author}
                  date={recipe.date}
                />
              );
            }
          })}
        </ul>
        <MainButton  handleClick={scrollRight}>
          {">"}
        </MainButton>
      </div>
    </section>
  );
}
