import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import useGlobalContext from "./context";


let CartItems = ({ id, title, img, price, amount }) => {

    let { removeItem, increase, decrease } = useGlobalContext();

    return (
        <div className="item">
            <article className="img-section">
                <img src={img} alt={title} />
            </article>

            <article className="price-section">
                <h4>{title}</h4>
                <strong>$ {price}</strong>
                <button className="btn" onClick={() => { removeItem(id) }}>Remove</button>
            </article>

            <article className="count-section">
                <button type="button" onClick={() => { increase(id) }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><AiOutlineUp style={{ fontSize: '1.5rem', color: "blueviolet" }} /></button>
                <h4>{amount}</h4>
                <button type="button" onClick={() => { decrease(id) }} style={{ background: 'none', border: 'none', cursor: 'pointer' }} ><AiOutlineDown style={{ fontSize: '1.5rem', color: "blueviolet" }} /></button>
            </article>
        </div>
    )
}


export default CartItems;