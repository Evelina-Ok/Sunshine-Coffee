import { NavLink } from "react-router-dom"
import style from "./SectionShop.module.scss"

export function SectionShop() {
  return (
    <div className={style.sectionShopStyle}>
        <h1>Shop now</h1>
        <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
        <NavLink to={"/products"}> <button>Go to products</button></NavLink>
    </div>
  )
}
