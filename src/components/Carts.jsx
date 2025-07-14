import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItem from "./CartItem";

function Carts({ cart, deleteCartItem, addToCart, decreaseQty, setCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    toast.success("Your order has been confirmed ✅");
    setCart([])
  };

  const handleSaveForLater = () => {
    localStorage.setItem("savedCart", JSON.stringify(cart));
    toast.success("Cart saved for later 📝");
  };

  const handleClearCart = () => {
    setCart([]);
    toast.info("Cart has been cleared 🧹");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Your Shopping Cart 🛒</h2>

      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              deleteCartItem={() => deleteCartItem(item)}
              incQty={() => addToCart(item)}
              decQty={() => decreaseQty(item)}
            />
          ))}

          <div className="row mt-4 align-items-center">
  {/* Buttons group */}
  <div className="col-12 col-lg-6 mb-3 mb-lg-0">
    <div className="d-flex flex-column flex-sm-row gap-2 justify-content-start">
      <button className="btn btn-outline-warning w-100 w-sm-auto" onClick={handleSaveForLater}>
        <i className="bi bi-bookmark-heart"></i> Save for Later
      </button>
      <button className="btn btn-outline-danger w-100 w-sm-auto" onClick={handleClearCart}>
        <i className="bi bi-trash3"></i> Clear Cart
      </button>
    </div>
  </div>

  {/* Total and checkout */}
  <div className="col-12 col-lg-6 text-start text-lg-end">
    <h4>
      Total: <span className="text-success">${total.toFixed(2)}</span>
    </h4>
    <button className="btn btn-primary mt-2 w-100 w-sm-auto" onClick={handleCheckout}>
      Proceed to Checkout
    </button>
  </div>
</div>
        </>
      ) : (
        <div className="alert alert-info text-center p-5 fs-3">Your Cart is Empty 🥹</div>
      )}
    </div>
  );
}

export default Carts;
