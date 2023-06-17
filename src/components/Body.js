import React, { useEffect, useState } from "react"
import ResturantCard from "./ResturantCard"
import Shimmer from "./Shimmer"

const Body=(props) =>{
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [showShimmer, setShowShimmer] = useState(true)
    useEffect(()=>{
        fetchData()
        // setData(props.resData)
    },[])

    console.log("Body Rendered")

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4587758&lng=78.3691566&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        console.log(json.data.cards[2].data.data.cards)
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

    return(
        <>
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search" onChange={(event)=>handleSearch(event.target.value)}></input>
                </div>
                <button className="filter-btn" onClick={()=>{
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
                    <div className="resturant-conntainer">
                        {data.map(resturant =><ResturantCard key={resturant.data.id} data={resturant}/>)}
                    </div>
                </div>
            }
        </>
        
    )
}

export default Body