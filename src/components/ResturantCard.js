import React from "react"

const ResturantCard =(props)=>{
    const{name, cuisine, rating, deliveryTime, imgSrc} = props.data
    return (
        <div className="resturant-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="resturant-logo"
                alt="resturant-logo"
                src={imgSrc}
            />
            <h3>{name}</h3>
            <h4>{cuisine.join(",")}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default ResturantCard