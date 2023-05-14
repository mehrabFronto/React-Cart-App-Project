import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Providers/AuthProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "16px" }} />
         <AuthProvider>
            <Provider store={store}>
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
            </Provider>
         </AuthProvider>
      </div>
   );
};

export default App;
