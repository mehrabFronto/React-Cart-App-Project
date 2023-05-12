import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Providers/AuthProvider";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "16px" }} />
         <AuthProvider>
            <CartProvider>
               <Layout>
                  <Switch>
                     {routes.map((route) => {
                        return (
                           <Route
                              key={route.path}
                              {...route}
                           />
                        );
                     })}
                  </Switch>
               </Layout>
            </CartProvider>
         </AuthProvider>
      </div>
   );
};

export default App;
