import { useEffect, useState } from "react";
import { useContext } from "react"; 
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import style from "../Styles/Products.module.scss"

export function Products () {
    const [products, setProducts] = useState();
    const {cartData, addToCart} = useContext(CartContext);
    console.log("Product", products);

    useEffect(() => {
        fetch('http://localhost:8081/products')
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [])
    
    return (
        <>
        <h1>Our picks for you</h1>
        <section className={style.productsStyle}>
            
            {products?.map((item) => {
                return (
                    <>
                    <figure>
                    <NavLink to={`/product/${item.id}`}key={item.name}>
                        <h4>{item.name}</h4>
                        <img src={item.image} alt="" />
                    </NavLink>
                        <p>{item.price} DKK</p>
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </figure>
                    </>
                )
            })}
        </section>
        </>
    );
}