import { Link } from "react-router-dom";
import * as data from "../../data";
import { useCart, useCartActions } from "../../Providers/CartProvider";

const HomePage = () => {
   const products = data.products;

   const { cart } = useCart();
   const dispatch = useCartActions();

   const checkInCart = (cart, product) => {
      return cart.find((item) => item.id === product.id);
   };

   return (
      <main>
         {/* peoducts */}
         <section className="productsList">
            {products.map((p) => {
               return (
                  <div
                     key={p.id}
                     className="product">
                     {/* product image */}
                     <div>
                        <img
                           src={p.image}
                           alt={p.name}
                           className="productImage"
                        />
                     </div>
                     {/* product detail */}
                     <div className="productDetail">
                        <h2>{p.name}</h2>
                        <p>${p.price}</p>
                     </div>
                     {/* add to cart btn */}
                     <div className="btnContainer">
                        <button
                           onClick={() =>
                              dispatch({ type: "ADD_TO_CART", payload: p })
                           }
                           className={
                              checkInCart(cart, p) ? "btn btn-continue" : "btn"
                           }
                           disabled={checkInCart(cart, p) && true}>
                           {checkInCart(cart, p) ? (
                              <Link
                                 to="/cart"
                                 className="continueLink">
                                 Continue Purchase?
                              </Link>
                           ) : (
                              "Add to cart"
                           )}
                        </button>
                     </div>
                  </div>
               );
            })}
         </section>
      </main>
   );
};

export default HomePage;
