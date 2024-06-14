import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className=" mx-10 py-6 text-center">
      <h1 className="px-2 py-2 font-bold text-xl">{name}</h1>
      <p className=" px-2 py-2 font-mono">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* Categories accordians*/}
      {categories.map((category) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
        />
      ))}

      {/* <h2 className=" px-2 py-2 font-bold text-lg">Menu</h2>
      <ul className="px-2 py-2 font-mono">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} : {"Rs"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
