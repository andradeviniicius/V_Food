import "./style.scss";

import clock from "././../../../assets/img/timer.svg";

export default function RecipeTime({ time }: any) {
  return (
    <div className="recipeTimeContainer">
      <img className="recipeTimeContainer__img" src={clock} alt="" />
      <p className="recipeTimeContainer__text">{time} Minutes</p>
    </div>
  );
}
