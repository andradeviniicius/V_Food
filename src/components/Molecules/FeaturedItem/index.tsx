import React from "react";
import { useNavigate } from "react-router-dom";

import {
  RecipeTime,
  RecipeCategorie,
  MainButton,
  RecipeAuthor,
} from "../../Atoms";

// import stamp from "@img/featuredCardStamp.png";

import "./style.scss";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  prepTime?: string;
  cookTime?: string;
  author?: string;
  date?: string;
};

const FeaturedItem = ({ ...props }: Props) => {
  const navigate = useNavigate();

  function navigateToRecipe() {
    navigate("/recipe");
  }

  return (
    <li className="featuredItem">
      <div className="featuredItem__leftContainer">
        <div className="featuredItem__categoriesStamp">
          <img src={"stamp"} alt="" />
        </div>

        <div className="featuredItem__cardInfo">
          <h1 className="featuredItem__title">{props.title}</h1>

          <p className="featuredItem__subTitle">{props.description}</p>

          <div className="featuredItem__recipeInfo">
            <RecipeTime time={props.prepTime} />
            <RecipeCategorie data={props.category} />
          </div>
        </div>

        <footer className="featuredItem__footer">
          <RecipeAuthor date={props.date} author={props.author} />
          <MainButton
            btnInsideInput={true}
            btnColor={"light"}
            handleClick={navigateToRecipe}
          >
            View Recipe
          </MainButton>
        </footer>
      </div>

      <div className="featuredItem__badge">
        <img
          src="../../../../public/assets/img/featuredRecipeBadge.png"
          alt=""
        />
      </div>
      <div className="featuredItem__rightContainer">
        <img className="featuredItem__foodImage" src={props.image} alt="" />
      </div>
    </li>
  );
};
export default FeaturedItem;
