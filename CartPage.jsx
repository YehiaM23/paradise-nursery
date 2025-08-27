import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (totalQuantity === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order Placed! Thank you for shopping :)");
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => navigate("/products")} style={{ marginRight: "10px" }}>Continue Shopping</button>
      <button onClick={handleCheckout}>Checkout</button>
      <div style={{ marginTop: "20px" }}>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
