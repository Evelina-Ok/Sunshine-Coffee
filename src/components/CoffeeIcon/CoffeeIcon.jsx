import style from "./CoffeeIcon.module.scss"
import { NavLink } from "react-router-dom"

export function CoffeeIcon () {
    return (
        <NavLink style={{textDecoration: "none"}} to={"/"}>
        <div className={style.coffeeIconStyle}>
            <h2>Sunshine Coffee</h2>
            <img src="../src/assets/logo.png" alt="logo" />
        </div>
        </NavLink>
    )
}