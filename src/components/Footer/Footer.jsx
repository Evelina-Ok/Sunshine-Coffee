import { CoffeeIcon } from "../CoffeeIcon/CoffeeIcon"
import style from "./Footer.module.scss"

export function Footer () {
    return (
        <>
        <footer className={style.footerStyle}>
        <div>
            <h5>Contact</h5>
            <p>Supercoffeeroad 223b</p>
            <p>92230 New Coffeland</p>
            <p>Phone: 22331122</p>
            <a href="mailto:coffeeland@info.com"></a>Mail: coffeeland@info.com        
        </div>
        <div>
            <h5>Legal</h5>
            <p>Cookie policy</p>
            <p>Retun policy</p>
            <p>Shipping</p>
            <p>Terms and Conditions</p>            
        </div>
        <div>
            <h5>About</h5>
            <p>History</p>
            <p>The people behind</p>
            <p>Partnerships</p>
            <p>International</p>
        </div>
        </footer>
        </>
    )
}