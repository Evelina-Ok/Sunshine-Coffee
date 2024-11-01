import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import style from "./Cart.module.scss"

//Cart should include:
// Save what's been added
// Add or delete
// Edit amount
// Go to checkout

export const Cart = ({action}) => {
  const { cartData, subtractFromCart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);


  return (
    <>
    <section className={style.cartStyle}>
      <img 
      onClick={() => action()}
      src="../../src/assets/Close.png" alt="" />
      <h1>Shopping Cart</h1>
      <div className={style.cartContentStyle}>
        {cartData?.map((item) => {
          return (
            <div>
              <h5>{item.name}</h5>
              <div>
                <button onClick={() => subtractFromCart(item)}>-</button>
              </div>
              <p>{item.quantity}</p>
              <div>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <p>{item.price * item.quantity} DKK</p>
              <div>
                <button onClick={() => removeFromCart(item)}>Delete</button>
              </div>
             
            </div>
          );
        })}
        <div>
          <button onClick={() => clearCart()}>Empty Cart</button>
        </div>
        <div>
          <p>Items in Cart:{cartData.reduce((acc, item) => acc + item.quantity, 0)}</p>
          <NavLink to={"/checkout"}>
            <button>Go to Checkout</button>
          </NavLink>
        </div>
      </div>
      </section>
    </>
  );
};
