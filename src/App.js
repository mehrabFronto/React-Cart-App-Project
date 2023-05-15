import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Providers/AuthProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "16px" }} />
         <AuthProvider>
            <Provider store={store}>
               <Layout>
                  <Routes>
                     <Route
                        path="/"
                        element={<HomePage />}
                     />
                     <Route
                        path="/cart"
                        element={<CartPage />}
                     />
                     <Route
                        path="/checkout"
                        element={<CheckoutPage />}
                     />
                     <Route
                        path="/sign-up"
                        element={<SignUpPage />}
                     />
                     <Route
                        path="/log-in"
                        element={<LogInPage />}
                     />
                     <Route
                        path="/profile"
                        element={<ProfilePage />}
                     />
                  </Routes>
               </Layout>
            </Provider>
         </AuthProvider>
      </div>
   );
};

export default App;
