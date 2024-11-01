import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cartData, setCartData] = useState([])

    console.log('Cart', cartData);
    

    // ---- add to cart
    const addToCart = (item) => {
        let clone = [...cartData];

        let foundIndex = clone.findIndex((product) => product.id === item.id)

        if (foundIndex !== -1){
            clone[foundIndex].quantity += 1;
            setCartData(clone)
        } else {
            setCartData([...cartData, {...item, quantity: 1}]);
        }
        console.log("index", foundIndex);
    };

    // ---- subtract from cart
    const subtractFromCart = (item) => {
        let clone = [...cartData];
        let foundIndex = clone.findIndex((product) => product.id === item.id)

        if (foundIndex !== -1){
            clone[foundIndex].quantity -= 1;
            if(clone[foundIndex].quantity <=0){
                removeFromCart(item);
            } else {
                setCartData(clone)
            };
        };
    };

    // ---- remove from cart
    const removeFromCart = (item) => {
        let clone = [...cartData];
        let foundIndex = clone.findIndex((product) => product.id === item.id);
        clone.splice(foundIndex, 1);
        setCartData(clone);
    };

    // ---- clear cart
    const clearCart = () => {
        setCartData([]);
    };

    

    return (
        <CartContext.Provider value={{cartData, addToCart, subtractFromCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
} 