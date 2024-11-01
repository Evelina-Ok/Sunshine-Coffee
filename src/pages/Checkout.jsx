import { CartContext } from "../context/CartContext"; 
import { useContext } from "react";

export function Checkout () {
    const { cartData, subtractFromCart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

    return (
        <>
        <h1>Checkout</h1>
        <form></form>
        <div>
            {cartData?.map((item) => {
                return (
                <>
                <div>
                <h5>{item.name}</h5>
                <h5>x {item.quantity}</h5>
                <h5>{item.price * item.quantity}</h5>
                </div>
                
                </>
            )
            })}
            <div>
                <h5>Total</h5>
                <h5>{cartData.reduce((total, item) => total + (item.price*item.quantity), 0)}</h5>
                //{}
                </div>
        </div>
        </>
        
    )
} 
//a different way to calculate total price in the cart
//const totalPrice = cartData.reduce(
   // (acc, item) => acc + item.price * item.qty, 0);