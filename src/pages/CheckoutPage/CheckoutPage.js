import { Link } from "react-router-dom";
import styles from "./checkoutPage.module.css";
import { useAuth } from "../../Providers/AuthProvider";
import { CartSummery } from "../CartPage/CartPage";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
   const { cart } = useSelector((state) => state);
   const userData = useAuth();

   const renderCheckout = () => {
      if (cart.length === 0)
         return (
            <Link
               style={{
                  color: "var(--primary-color)",
                  fontSize: "2rem",
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
               }}
               to="/">
               Go Shopping
            </Link>
         );

      return (
         <>
            <section className={styles.checkoutDetail}>
               <div className={styles.checkoutDetailWrapper}>
                  <h2>Checkout Detail:</h2>
                  <div className={styles.checkoutDetailItem}>
                     <span>Name: </span>
                     <p>{userData.name}</p>
                  </div>
                  <div className={styles.checkoutDetailItem}>
                     <span>E-mail: </span>
                     <p>{userData.email}</p>
                  </div>
                  <div className={styles.checkoutDetailItem}>
                     <span>Phone Number: </span>
                     <p>{userData.phoneNumber}</p>
                  </div>
               </div>
            </section>
            <CartSummery
               title="Checkout summery"
               btn="Order"
            />
         </>
      );
   };

   return <div className={styles.checkoutContainer}>{renderCheckout()}</div>;
};

export default CheckoutPage;
