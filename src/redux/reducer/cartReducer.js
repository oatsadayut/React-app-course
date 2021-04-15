import { CART } from "../action/cartAction"; //import action

//init State
const initState = {
  cart: [],
  total: 0,
};

//retrue state
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    //action type
    case CART: //Name Type action
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total,
        piceTotal: action.payload.piceTotal,
      };
    default:
      return state; // Return Default
  }
};

export default cartReducer;
