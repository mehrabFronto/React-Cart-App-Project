import { createStore } from "redux";
import cartReducer from "./products/cartReducer";

const store = createStore(cartReducer);

export default store;
