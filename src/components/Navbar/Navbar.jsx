import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { CoffeeIcon } from "../CoffeeIcon/CoffeeIcon";

export function Navbar({action}) {
  return (
    <nav className={style.NavbarStyle}>
      <div></div>
      <div className={style.navCirle}>
        <div className={style.iconStyle}>
          <CoffeeIcon />
        </div>
      </div>

      <div className={style.userStyle}>
        <img 
        onClick={() => action()}
        src="../src/assets/Shopping-Cart.png" alt="" />
        <img src="../src/assets/User.png" alt="" />
      </div>
    </nav>
  );
}
