import "./App.css";
import Layout from "./Layout/Layout";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
   return (
      <div className="app">
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
      </div>
   );
};

export default App;
