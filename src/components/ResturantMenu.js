import React from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import ControlledAccordions from "../Common/ControlledAccordions";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = (props)=>{
    const {resId} = useParams();
    let [resInfo, menu] = useResturantMenu(resId)
    // console.log(menu)
    let openOnLoad = menu[0]?.card?.card?.title
    return (
        resInfo?
        <>
        <div className="menu m-4 text-center">
            <h1 className="text-lg font-semibold">{resInfo.name}</h1>
            <p>{resInfo.cuisines.join(",")} - {resInfo.costForTwoMessage} - {resInfo.areaName}</p>
            <h2>Menu</h2>            
        </div>
        {menu.length >0 && menu.map((el,i)=> 
            <div key={i} className="my-4 w-6/12 mx-auto">
                <ControlledAccordions openOnLoad= {openOnLoad} menuData={el?.card?.card}/>
            </div>
        )}
        </>
        :<Shimmer/>
    )
}

export default RestaurantMenu