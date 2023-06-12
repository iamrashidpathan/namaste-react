import React from "react"
import  ReactDOM  from "react-dom/client"


/*
Planning for the Food ordering App
Header
    - Logo
    -Nav Iteams
Body
    -Search
    -ResturantContainer
    -Rsturant Card
        -Img
        -Name of the resturant, star rating, cuisine, delivery time
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/icon.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resData =[
    {
        name: "Nawab's Biryani",
        id:"1",
        cuisine:["Biryani","Tandoor","Arabian"],
        rating:4.6,
        deliveryTime:36,
        imgSrc:"https://wallpaperaccess.com/full/4622468.jpg"
    },
    {
        name: "KFC",
        id:"2",
        cuisine:["Chicken","Burger","Drinks"],
        rating:4.0,
        deliveryTime:16,
        imgSrc:"https://th.bing.com/th/id/OIP.imvXIF7iaqRGwSphuqQioAHaEn?pid=ImgDet&rs=1"
    }
]

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

const Body=() =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="resturant-conntainer">
                {resData.map(resturant => <ResturantCard key={resturant.id} data={resturant}/>)}
            </div>
        </div>
    )
}

const AppLayout =()=>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>) 