const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
  cart: [],
}

export default function cartReducer(state = initialState, action) {
  
  switch(action.type){
    case ADD_ITEM:
      const { product } = action.payload;
      return {
        ...state,
        cart: [...state.cart, product],
      };

    case DELETE_ITEM:
      const { item } = action.payload;
      return {
        ...state,                      
        cart: state.cart.filter((c) => c.id !== item.id)  
      };

    default:
      return state;
  }
};
