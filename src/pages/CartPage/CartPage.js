import { useCart, useCartActions } from "../../Providers/CartProvider";
import styles from "./CartPage.module.css";

const CartPage = () => {
   const { cart } = useCart();
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
                                    {" "}
                                    -{" "}
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
            <div className={styles.cartSumary}>sumary</div>
         </div>
      );
   };

   return <main>{renderCart()}</main>;
};

export default CartPage;
