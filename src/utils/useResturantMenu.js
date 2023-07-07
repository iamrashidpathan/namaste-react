import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useResturantMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null)
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu= async ()=>{
        const data = await fetch(
            MENU_API+resId
        )
        const json = await data.json()
        setResInfo(json?.data?.cards[0]?.card?.card?.info)
        let menuArr =json?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards
        setMenu(menuArr.slice(1, menuArr.length-2))
    }

    return [resInfo, menu]
}

export default useResturantMenu