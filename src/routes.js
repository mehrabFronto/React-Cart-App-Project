import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

export const routes = [
   { path: "/cart", component: CartPage },
   { path: "/checkout", component: CheckoutPage },
   { path: "/sign-up", component: SignUpPage },
   { path: "/log-in", component: LogInPage },
   { path: "/profile", component: ProfilePage },
   { path: "/cart", component: CartPage },
   { path: "/", component: HomePage, exact: true },
];
