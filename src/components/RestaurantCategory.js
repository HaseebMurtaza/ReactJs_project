import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/*accordian Header */}

      <div className="flex justify-between">
        <span className="font-bold text-md">
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/*accordian Body */}
      <ItemList items={data.data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
