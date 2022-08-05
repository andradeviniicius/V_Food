import dummyImage from "../../../assets/img/CategItem_Breakfast.svg";
import "./styles.scss";

type Props = { categIcon: string; categName: string };

const CategoriesItem = ({ categIcon, categName }: Props) => {
  return (
    <li className="searchCategories__item">
      <img className="searchCategories__image" src={dummyImage} alt="" />
      <p className="searchCategories__text">{categName}</p>
    </li>
  );
};

export default CategoriesItem;
