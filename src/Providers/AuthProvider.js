import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthProvider = ({ children }) => {
   const [state, setState] = useState(false);

   useEffect(() => {
      const data =
         JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
      setState(data);
   }, []);

   useEffect(() => {
      const data = JSON.stringify(state);
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
   }, [state]);

   return (
      <AuthContext.Provider value={state}>
         <AuthContextDispatcher.Provider value={setState}>
            {children}
         </AuthContextDispatcher.Provider>
      </AuthContext.Provider>
   );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

export const useAuthAction = () => useContext(AuthContextDispatcher);
