import * as actionType from "./types";

export const addToCart = (itemID) =>{
    return{
        type: actionType.ADD_TO_CART,
        payload:{
            id: itemID,
        }
    }
}

export const removeFromCart = (itemID) =>{
    return{
        type: actionType.REMOVE_FROM_CART,
        payload:{
            id: itemID,
        }
    }
}

export const adjustAmount = (itemID, value) =>{
    return{
        type: actionType.ADJUST_ITEM_AMOUNT,
        payload:{
            id: itemID,
            qty: value
        }
    }
}

export const passItem = (item) =>{
    return{
        type: actionType.PASS_ITEM,
        payload:{
            PAYLOAD: item,
        }
    }
}
