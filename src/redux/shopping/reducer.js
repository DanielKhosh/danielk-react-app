import Product from "../../components/products/Product/Product";
import * as actionTypes from "./types";

const INITIAL_STATES = {

    products: [
        {
            id: 1,
            sort: "Bryggkaffe",
            price: 49,
            days:"brygga på månadens bönor"
        },
        {
            id: 2,
            sort: "Caffè Doppio",
            price: 49,
            days:"brygga på månadens bönor"
        },
        {
            id: 3,
            sort: "Cappuccino",
            price: 49,
            days:"brygga på månadens bönor"
        },
        {
            id: 4,
            sort: "Latte Macchiato",
            price: 49,
            days:"brygga på månadens bönor"
        },
        {
            id: 5,
            sort: "Kaffe Latte",
            price: 49,
            days:"brygga på månadens bönor"
        },
        {
            id: 6,
            sort: "Cortado",
            price: 39,
            days:"brygga på månadens bönor"
        }

    ],
    cart: [],
    currentItem: null
};
const shopReducer = (state = INITIAL_STATES, action) =>{
    switch(action.type){
        
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(Product => Product.id === action.payload.id)
            const isAllreadyInCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false 
            );
            return{
                ...state,
                cart: isAllreadyInCart 
                    ? state.cart.map(item => 
                        item.id == action.payload.id 
                        ? 
                        {...item, qty: item.qty +1} : item
                    )
                : [...state.cart,{...item,qty:1}],
            }

        case actionTypes.REMOVE_FROM_CART:
            return{

                ...state,

                cart: state.cart.filter((item)=> item.id !== action.payload.id)
            };
        
        case actionTypes.ADJUST_ITEM_AMOUNT:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty:action.payload.qty} : item)
            };


        default:
            return state;
    }
};

export default shopReducer;