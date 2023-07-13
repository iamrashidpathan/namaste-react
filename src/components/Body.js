import React, { useEffect, useState } from "react"
import ResturantCard from "./ResturantCard"
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
    

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4587758&lng=78.3691566&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        setAllData(json?.data?.cards[2]?.data?.data?.cards)
        setData(json.data?.cards[2]?.data?.data?.cards)
    }

    const handleSearch = (searchText)=>{
        setShowShimmer(false)
        if (searchText.length ===0) setData(allData)
        else{
            setData(allData.filter((el)=>{
                return el?.data?.name.toLowerCase().includes(searchText.toLowerCase())
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
                    setData(data.filter((el)=>Number(el.data.avgRating)>4))
                    else
                    setData(allData)
                }}>
                    {data.length === allData.length ?"Show Top Rated Resturants": "Show All Resturants"}
                </button>
            </div>

            {data.length ===0?
                <>
                    {showShimmer? <Shimmer/> : <h2>No restaurants found</h2>}
                </> 
                :
                <div className="body">
                    <div className="resturant-conntainer m-2">
                        {data.map(resturant =><Link key={resturant.data.id} to={`/resturantmenu/${resturant.data.id}`}><ResturantCard data={resturant}/></Link>)}
                    </div>
                </div>
            }
        </>
        
    )
}

export default Body