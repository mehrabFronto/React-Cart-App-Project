import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";

export const routes = [
   { path: "/cart", component: CartPage },
   { path: "/", component: HomePage, exact: true },
];
