import { Link, NavLink, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useCart } from "../../Providers/CartProvider";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import { useAuth, useAuthAction } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navigation = ({ location, history }) => {
   const [isOpen, setIsOpen] = useState(false);
   const { cart } = useCart();
   const userData = useAuth();
   const setAuth = useAuthAction();

   const logOutHandler = () => {
      setAuth(false);
      toast.success("you logged out");
      if (location.pathname === "/profile" || location.pathname === "/checkout")
         history.push("/");
   };

   return (
      <header className={styles.header}>
         <nav className={styles.nav}>
            <ul className={styles.list_items}>
               <div className={styles.mobile_nav}>
                  <h1>
                     <Link
                        style={{ color: "var(--primary-color)" }}
                        to="/"
                        onClick={() => setIsOpen(false)}>
                        Shopping App
                     </Link>
                  </h1>
                  <button
                     className="btn btn-menu"
                     onClick={() => setIsOpen(!isOpen)}>
                     {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
                  </button>
               </div>
               {isOpen && (
                  <div className={styles.mobile_listItems}>
                     <li className={styles.mobileTab}>
                        <NavLink
                           className={styles.mobileLink}
                           to="/cart"
                           activeClassName={styles.mobileActiveLink}
                           onClick={() => setIsOpen(false)}>
                           Cart
                           <span className={styles.qty}>{cart.length}</span>
                        </NavLink>
                     </li>
                     <li className={styles.mobileTab}>
                        <NavLink
                           className={styles.mobileLink}
                           to={userData ? "/profile" : "/log-in"}
                           activeClassName={styles.mobileActiveLink}
                           onClick={() => setIsOpen(false)}>
                           {userData ? "Profile" : "Login/Signup"}
                        </NavLink>
                     </li>
                  </div>
               )}
               <div className={styles.list_itemsWrapper}>
                  <li className={styles.cartTab}>
                     <NavLink
                        className={styles.link}
                        activeClassName={styles.activeClassName}
                        to="/cart">
                        Cart
                        <span className={styles.qty}>{cart.length}</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        className={styles.link}
                        activeClassName={styles.activeClassName}
                        to={userData ? "/profile" : "/log-in"}>
                        {userData ? "Profile" : "Login/Signup"}
                     </NavLink>
                  </li>
                  {userData && (
                     <ImExit
                        className="btn btn-menu"
                        onClick={logOutHandler}
                     />
                  )}
               </div>
            </ul>
         </nav>
      </header>
   );
};

export default withRouter(Navigation);
