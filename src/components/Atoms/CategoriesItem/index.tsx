import dummyImage from "../../../assets/img/CategItem_Breakfast.svg";
import "./styles.scss";

type Props = { categIcon: string; categName: string };

const CategoriesItem = ({ categIcon, categName }: Props) => {
  return (
    <li className="categoriesItem">
      <img className="categoriesItem__image" src={dummyImage} alt="" />
      <p className="categoriesItem__text">{categName}</p>
    </li>
  );
};

export default CategoriesItem;
