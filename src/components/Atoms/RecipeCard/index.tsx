import "./styles.scss";
import clock from "assets/icons/timer.svg";
import fork from "assets/icons/forkKnife.svg";

import dummyImage from "assets/img/dummyImage1.png";

type Props = {
  image: string;
  description: string;
  prepTime: number;
  categorie: string;
};

const RecipeCard = ({ image, description, prepTime, categorie }: Props) => {
  return (
    <div className="recipeCard">
      <div className="recipeCard__content">
        <img className="recipeCard__image" src={dummyImage} alt="recipe" />
        <p className="recipeCard__title">Chicken Meatballs with Cream Cheese</p>
        <div className="recipeCard__info">
          <div className="recipeCard__recipeInfo">
            <div className="recipeCard__prepTime">
              <img className="recipeCard__clock" src={clock} alt="prepTime" />
              <span className="recipeCard__text">{prepTime} min</span>
            </div>
            <div className="recipeCard__categorie">
              <img className="recipeCard__fork" src={fork} alt="categorie" />
              <span className="recipeCard__text">{categorie}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
