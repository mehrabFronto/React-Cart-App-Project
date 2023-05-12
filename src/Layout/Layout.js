import React from "react";
import Navigation from "../components/Navigation/Navigation";
import "./leyout.css";

const Layout = ({ children }) => {
   return (
      <>
         <Navigation />
         <main className="layout">{children}</main>
      </>
   );
};

export default Layout;
