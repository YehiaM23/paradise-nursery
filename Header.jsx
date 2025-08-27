import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>Paradise Nursery</Link>
      <nav>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>
          🛒 {totalQuantity}
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "lightgreen",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "white",
  textDecoration: "none",
};

const linkStyle = {
  marginLeft: "15px",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
};
