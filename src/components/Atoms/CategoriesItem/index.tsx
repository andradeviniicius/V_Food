import dummyImage from "assets/img/CategItem_Breakfast.svg";

type Props = { categIcon: string; categName: string };

const CategoriesItem = ({ categIcon, categName }: Props) => {
  return (
    <li className="categoriesItem">
      <img src={dummyImage} alt="" />
      <p>{categName}</p>
    </li>
  );
};

export default CategoriesItem;
