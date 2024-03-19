import CartItem from "./CartItem";
import useGlobalContext from "./context";


let CartContainer = () => {

    let { cart, clearCart, totalCost } = useGlobalContext();



    let cartArray = Array.from(cart.entries());

    if (cartArray.length === 0) {

        return (
            <div className="empty-container">
                <h4>your Bag</h4>
                <strong>is Currently Empty</strong>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <h3>YOUR BAG</h3>
            <div className="cart-center">
                {cartArray.map((items) => {
                    let [id, item] = items;
                    return (
                        <CartItem key={id} {...item} />
                    )
                })}



            </div>
            <hr />
            <div className="total-container">
                <strong>Total</strong>
                <button className="btn">${totalCost.toFixed(2)}</button>
            </div>
            <button className="btn" onClick={clearCart}>clear all</button>
        </div>
    )
}


export default CartContainer;