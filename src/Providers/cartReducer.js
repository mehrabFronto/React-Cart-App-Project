const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_CART":
         const updatedCart = [...state.cart];

         const index = updatedCart.findIndex(
            (item) => item.id === action.payload.id,
         );

         if (index < 0) {
            updatedCart.push({ ...action.payload, qty: 1 });
         } else {
            const updatedItem = { ...updatedCart[index] };
            updatedItem.qty++;
            updatedCart[index] = updatedItem;
         }
         return { ...state, cart: updatedCart };
      default:
         return state;
   }
};

export default cartReducer;
