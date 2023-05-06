import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import CartProvider from "./Providers/CartProvider";

const App = () => {
   return (
      <div className="app">
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
      </div>
   );
};

export default App;
