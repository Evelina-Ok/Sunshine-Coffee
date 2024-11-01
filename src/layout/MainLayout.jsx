import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Cart } from "../components/Cart/Cart";
import { CookieBanner } from "../components/CookieBanner/CookieBanner";
import { useState } from "react";



export function MainLayout () {
    //set update the function of the first value
    const [cartModalOpen, setCartModalOpen] = useState(false)
    console.log(cartModalOpen);
    
    function handleCart () {
        if (cartModalOpen === false) {
            setCartModalOpen(true)
        } else {
            setCartModalOpen(false)
        }
    }

    return (
        <>
        <CookieBanner />
        <Navbar action={handleCart}/>
        {cartModalOpen && <Cart />}
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}
