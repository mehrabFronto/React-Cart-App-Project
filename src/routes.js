import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import HomePage from "./pages/HomePage/HomePage";

export const routes = [
   { path: "/cart", component: CartPage },
   { path: "/checkout", component: CheckoutPage },
   { path: "/", component: HomePage, exact: true },
];
