import "./style.scss";

import fork from "././../../../assets/img/forkKnife.svg";

export default function RecipeCategorie({ data }: any) {
  return (
      <div className="recipeCategorieContainer">
        <img className="recipeCategorieContainer__img" src={fork} alt="" />
        <p className="recipeCategorieContainer__text">{data}</p>
      </div>
  );
}
