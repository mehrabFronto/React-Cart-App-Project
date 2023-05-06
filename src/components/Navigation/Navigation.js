import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
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
               <li>
                  <NavLink
                     className={styles.link}
                     activeClassName={styles.activeClassName}
                     to="/cart">
                     Cart
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
