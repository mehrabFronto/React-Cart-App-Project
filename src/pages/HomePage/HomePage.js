import * as data from "../../data";
import { useCartActions } from "../../Providers/CartProvider";

const HomePage = () => {
   const products = data.products;

   const dispatch = useCartActions();

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
                           className="btn">
                           Add to cart
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
