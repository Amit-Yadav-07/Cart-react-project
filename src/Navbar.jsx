import { TiShoppingCart } from "react-icons/ti";
import useGlobalContext from "./context";



let Navbar = () => {
    let { totalAmount } = useGlobalContext();


    return (
        <nav>
            <div className="nav-center">
                <h4>UseReducer</h4>
                <div className="amount-count">
                    <h5>{totalAmount}</h5>
                    <button type="button"><TiShoppingCart className='icon' /></button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;