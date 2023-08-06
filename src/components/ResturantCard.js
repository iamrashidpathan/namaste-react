import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
//   const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = props?.data;
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
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white rounded-md m-2 p-2 text-sm">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}  

export default RestaurantCard;