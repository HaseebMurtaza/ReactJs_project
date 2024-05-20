import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=10582&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setresinfo(json.data);
  };

  if (resinfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2].card?.card?.info;

  return resinfo.length === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Pizza</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
