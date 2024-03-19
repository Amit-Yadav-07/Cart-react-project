import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import cartItems from './data';
import { CLEAR_CART, INCREASE, DECREASE, DISPLAY, REMOVE, LOADING } from './actions';
import { getTotals } from './utils.js';


let url = `https://course-api.com/react-useReducer-cart-project`;

let initialState = {
    loading: false,
    cart: new Map()
}

let appContext = createContext();

export let AppProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let { totalAmount, totalCost } = getTotals(state.cart);

    let clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    let removeItem = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
    }

    let increase = (id) => {
        dispatch({ type: INCREASE, payload: { id } })
    }

    let decrease = (id) => {
        dispatch({ type: DECREASE, payload: { id } })
    }

    let fetchData = async () => {
        dispatch({ type: LOADING });
        let response = await fetch(url);
        let cart = await response.json();
        dispatch({ type: DISPLAY, payload: { cart } })

    }

    useEffect(() => {
        fetchData()
    }, [])



    return <appContext.Provider value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost
    }}>{children}</appContext.Provider>
}

let useGlobalContext = () => {

    return useContext(appContext)
}

export default useGlobalContext;
