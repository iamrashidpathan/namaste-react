import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { CDN_URL } from '../utils/constants';
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{

    const dispatch = useDispatch()
    const handleClearCart =()=> {
        dispatch(clearCart());
    }
    const cartItems = useSelector(store=> store.cart.items)
    console.log(cartItems)
    return (
    <div className="text-center m-5">
        <h1 className=" font-bold text-xl">Cart</h1>
        <div>{cartItems.length} item(s)</div>
        <button className="rounded-none bg-red-400 p-2 hover:border-2 border-black" onClick={handleClearCart}>
            Clear Cart
        </button>
        {cartItems.length>0 && cartItems.map(item=>(
        <div className="flex justify-evenly items-center border-2 border-yellow-400	 p-2 m-2">
            <img
                        className="w-40"
                        alt="menu-logo"
                        src={CDN_URL + item.imageId}
                        />
            <h3>{item.name}</h3>
            <div>Rs. {item.price/100}</div>

        </div>
        ))}
    </div>)
}

export default Cart