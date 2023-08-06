import React, { Suspense, lazy } from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error  from "./components/Error"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import RestaurantMenu from "./components/ResturantMenu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"


const AppLayout =()=>{
    return (
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: "Rashid Khan"}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    </Provider>
    )
}

const About = lazy(()=>import("./components/About"))

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:
                <Suspense fallback={<>Loading...</>}>
                    <About/>
                </Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"resturantmenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>) 