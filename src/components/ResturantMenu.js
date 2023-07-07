import React from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import ControlledAccordions from "../Common/ControlledAccordions";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = (props)=>{
    const {resId} = useParams();
    let [resInfo, menu] = useResturantMenu(resId)
    return (
        resInfo?
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <p>{resInfo.cuisines.join(",")} - {resInfo.costForTwoMessage} - {resInfo.areaName}</p>
            <h2>Menu</h2>
            {menu.length >0 && menu.map((el,i)=> <ControlledAccordions key={i} menuData={el?.card?.card}/>)}
            
        </div>
        :<Shimmer/>
    )
}

export default RestaurantMenu