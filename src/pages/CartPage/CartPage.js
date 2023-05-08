import { useCart, useCartActions } from "../../Providers/CartProvider";
import styles from "./CartPage.module.css";
import { BiTrash } from "react-icons/bi";

const CartPage = () => {
   const { cart, total } = useCart();
   const dispatch = useCartActions();

   const decHandler = (item) => {
      dispatch({ type: "DECREMENT_PRODUCT", payload: item });
   };

   const incHandler = (item) => {
      dispatch({ type: "ADD_TO_CART", payload: item });
   };

   const renderCart = () => {
      if (cart.length === 0) {
         return <h2>Cart is empty!</h2>;
      }

      return (
         <div className={styles.cart}>
            {/* cart items */}
            <div className={styles.cartItemsList}>
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
                              <p>Price : ${item.price}</p>
                              <p>Total : ${item.price * item.qty}</p>
                           </div>
                        </section>
                     </div>
                  );
               })}
            </div>

            {/* cart sumary */}
            <div className={styles.cartSumary}>
               <h2>
                  Total cost : <span>${total}</span>
               </h2>
               <button className="btn btn-cart">Checkout</button>
            </div>
         </div>
      );
   };

   return <main>{renderCart()}</main>;
};

export default CartPage;
