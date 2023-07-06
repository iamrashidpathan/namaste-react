import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import ControlledAccordions from "../Common/ControlledAccordions";

const RestaurantMenu = (props)=>{
    const {resId} = useParams();
    // debugger
    const [resInfo, setresInfo] = useState(null)
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu= async ()=>{
        const data = await fetch(
            MENU_API+resId
        )
        const json = await data.json()
        setresInfo(json?.data?.cards[0]?.card?.card?.info)
        let menuArr =json?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards
        setMenu(menuArr.slice(1, menuArr.length-2))
        console.log(menuArr.slice(1, menuArr.length-2))
    }

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