import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useCart } from "../../Providers/CartProvider";

const Navigation = () => {
   const { cart } = useCart();

   return (
      <header className={styles.header}>
         <nav className={styles.nav}>
            <ul className={styles.list_items}>
               <li>
                  <NavLink
                     className={styles.link}
                     activeClassName={styles.activeClassName}
                     exact
                     to="/">
                     Home
                  </NavLink>
               </li>
               <li className={styles.cartTab}>
                  <NavLink
                     className={styles.link}
                     activeClassName={styles.activeClassName}
                     to="/cart">
                     Cart
                     <span className={styles.qty}>{cart.length}</span>
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
