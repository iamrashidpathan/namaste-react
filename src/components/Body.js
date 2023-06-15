import React, { useEffect, useState } from "react"
import ResturantCard from "./ResturantCard"

const Body=(props) =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        setData(props.resData)
    },[props.resData.length])

    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    if(data.length === props.resData.length)
                    setData(data.filter((el)=>el.rating>4))
                    else
                    setData(props.resData)
                    // debugger
                }}>
                    {data.length === props.resData.length ? "Show Top Rated Resturants" : "Show All Resturants"}
                </button>
            </div>
            <div className="resturant-conntainer">
                {data.map(resturant =><ResturantCard key={resturant.id} data={resturant}/>)}
            </div>
        </div>
    )
}

export default Body