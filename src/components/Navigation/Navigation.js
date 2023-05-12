import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useCart } from "../../Providers/CartProvider";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { cart } = useCart();

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
                           to="/sign-up"
                           activeClassName={styles.mobileActiveLink}
                           onClick={() => setIsOpen(false)}>
                           Login/Signup
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
                        to="/sign-up">
                        Login/Signup
                     </NavLink>
                  </li>
               </div>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
