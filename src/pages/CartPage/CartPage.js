import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { BiTrash } from "react-icons/bi";
import { useAuth } from "../../Providers/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../redux/products/cartActions";

const CartPage = () => {
   const { cart } = useSelector((state) => state);
   const dispatch = useDispatch();

   const decHandler = (item) => {
      dispatch(removeProduct(item));
   };

   const incHandler = (item) => {
      dispatch(addProduct(item));
   };

   const renderCart = () => {
      if (cart.length === 0) {
         return (
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
               }}>
               <h2>Cart is empty!</h2>
               <Link
                  style={{ color: "var(--primary-color)", fontSize: "2rem" }}
                  to="/">
                  Go Shopping
               </Link>
            </div>
         );
      }

      return (
         <div className={styles.cart}>
            {/* cart items */}
            <section className={styles.cartItemsList}>
               {cart.map((item) => {
                  return (
                     // cart item
                     <div
                        key={item.id}
                        className={styles.cartItem}>
                        {/* cart item datail image */}
                        <section>
                           <img
                              src={item.image}
                              alt={item.name}
                           />
                        </section>
                        {/* cart item datail */}
                        <section className={styles.cartItemDetailContainer}>
                           <div className={styles.cartItemDetail}>
                              <h2>Name : {item.name}</h2>
                              <div className={styles.cartItemQty}>
                                 <button onClick={() => decHandler(item)}>
                                    {item.qty === 1 ? (
                                       <BiTrash style={{ color: "red" }} />
                                    ) : (
                                       "-"
                                    )}
                                 </button>
                                 <span>{item.qty}</span>
                                 <button onClick={() => incHandler(item)}>
                                    {" "}
                                    +{" "}
                                 </button>
                              </div>
                           </div>
                           <div className={styles.cartItemDetail}>
                              <div className={styles.priceSection}>
                                 <p>Price :</p>
                                 <p
                                    className={
                                       item.price !== item.offPrice
                                          ? "offPrice"
                                          : ""
                                    }>
                                    ${item.price}
                                 </p>
                                 {item.price !== item.offPrice && (
                                    <p>${item.offPrice}</p>
                                 )}
                              </div>
                              <p>Total : ${item.offPrice * item.qty}</p>
                           </div>
                        </section>
                     </div>
                  );
               })}
            </section>

            {/* cart summery */}
            <CartSummery />
         </div>
      );
   };

   return <div>{renderCart()}</div>;
};

export default CartPage;

export const CartSummery = ({ title = "Cart Summery", btn = "Checkout" }) => {
   const userData = useAuth();
   const { cart, total } = useSelector((state) => state);

   const subtotal = cart.reduce(
      (acc, curr) => (acc += curr.price * curr.qty),
      0,
   );

   return (
      <section className={styles.cartSummery}>
         <div className={styles.cartSummeryWrapper}>
            <h2>{title}</h2>
            <div className={styles.summeryItem}>
               <p>Subtotal :</p>
               <p>${subtotal}</p>
            </div>
            <div
               className={styles.summeryItem}
               style={{
                  borderBottom: "1px solid #666",
                  paddingBottom: "20px",
               }}>
               <p>Discount :</p>
               <p>${subtotal - total}</p>
            </div>
            <div className={`${styles.summeryItem} ${styles.cost}`}>
               <p>Total :</p>
               <p>${total}</p>
            </div>
            <button className="btn btn-cart">
               <Link to={userData ? "/checkout" : "/log-in?redirect=checkout"}>
                  {btn}
               </Link>
            </button>
         </div>
      </section>
   );
};
