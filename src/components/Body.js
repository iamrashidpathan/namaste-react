import React, { useEffect, useState } from "react"
import ResturantCard, {withPromotedLabel} from "./ResturantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnLineStatus from "../utils/useOnlineStatus"

const Body=(props) =>{
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [showShimmer, setShowShimmer] = useState(true)
    useEffect(()=>{
        fetchData()
        // setData(props.resData)
    },[])
    
    const RestaurantCardPromoted = withPromotedLabel(ResturantCard)
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4587758&lng=78.3691566&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setAllData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const handleSearch = (searchText)=>{
        setShowShimmer(false)
        if (searchText.length ===0) setData(allData)
        else{
            setData(allData.filter((el)=>{
                return el?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            }))
        }
        
    }
    let onlineStatus =useOnLineStatus()
    if (!onlineStatus) return <h1>Looks like you are ofline. Please check your your internet connection</h1>
    return(
        <>
            <div className="filter">
                <div className="search">
                    <input className="p-1 border-2" type="text" placeholder="Search" onChange={(event)=>handleSearch(event.target.value)}></input>
                </div>
                <button className="filter-btn border-2 p-1 bg-zinc-400" onClick={()=>{
                    if(data.length === allData.length)
                    setData(data.filter((el)=>Number(el.info.avgRating)>4))
                    else
                    setData(allData)
                }}>
                    {data?.length === allData?.length ?"Show Top Rated Resturants": "Show All Resturants"}
                </button>
            </div>

            {data?.length ===0?
                <>
                    {showShimmer? <Shimmer/> : <h2>No restaurants found</h2>}
                </> 
                :
                <div className="body">
                    <div className="resturant-conntainer mx-auto my-2 w-10/12">
                        {data?.map(resturant =>{
                            return <Link key={resturant?.info.id} to={`/resturantmenu/${resturant?.info.id}`}>
                                {resturant?.info.promoted?<RestaurantCardPromoted data={resturant?.info}/>:<ResturantCard data={resturant?.info}/>}
                            </Link>})}
                    </div>
                </div>
            }
        </>
        
    )
}

export default Body