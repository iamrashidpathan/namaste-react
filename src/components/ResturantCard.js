import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
//   const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = props?.data.data;

  return (
    <div className="resturant-card rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="resturant-logo rounded-lg m-2"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;