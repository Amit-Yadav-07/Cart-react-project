import { CLEAR_CART, INCREASE, DECREASE, DISPLAY, REMOVE, LOADING } from './actions';

let reducer = (state, action) => {

    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() }
    }
    if (action.type === REMOVE) {
        let newCart = new Map(state.cart)
        console.log(state.cart);
        newCart.delete(action.payload.id);
        return { ...state, cart: newCart };
    }

    if (action.type === INCREASE) {
        let newCart = new Map(state.cart)
        let itemId = action.payload.id;

        let item = newCart.get(itemId);
        let newItem = { ...item, amount: item.amount + 1 };

        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };

    }

    if (action.type === DECREASE) {

        let newCart = new Map(state.cart);

        let itemId = action.payload.id;

        let item = newCart.get(itemId);

        if (item.amount === 1) {
            newCart.delete(itemId);
            return { ...state, cart: newCart }
        }

        let newItem = { ...item, amount: item.amount - 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart }

    }

    if (action.type === LOADING) {
        return { ...state, loading: true };
    }

    if (action.type === DISPLAY) {
        console.log(action.payload.cart);
        let newCart = new Map(action.payload.cart.map((item => {
            return [item.id, item];
        })))
        return { ...state, loading: false, cart: newCart };
    }








    throw new Error(`no matching ${action.type}`)
}



export default reducer;