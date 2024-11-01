import style from "./Navbar.module.scss";
import { CoffeeIcon } from "../CoffeeIcon/CoffeeIcon";
import { DropdownRegion } from "../DropdownRegion/DropdownRegion";

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
      <DropdownRegion /> 
        <img 
        //sending action as a prop in function 'Navbar' to MainLayout
        onClick={() => action()}
        src="../src/assets/Shopping-Cart.png" alt="" />
        <img src="../src/assets/User.png" alt="" />
      </div>
    </nav> 
  );
}
