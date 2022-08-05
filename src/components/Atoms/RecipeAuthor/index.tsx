import johnLogo from "././../../../assets/img/johnSmithLogo.png";

import "./style.scss";

type Props = {
  author: any;
  date: any;
};

export default function RecipeAuthor({ author, date }: Props) {
  return (
    <div className="recipeAuthorContainer">
      <img className="RecipeAuthorContainer__logo" src={johnLogo} alt="" />
      <div className="recipeAuthorContainer__info">
        <p className="recipeAuthorContainer__name">{author}</p>
        <p className="recipeAuthorContainer__date">{date}</p>
      </div>
    </div>
  );
}
