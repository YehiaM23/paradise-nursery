import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={itemStyle}>
      <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
      <div>
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={() => dispatch(increase(item.id))}>+</button>
        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
        <button onClick={() => dispatch(decrease(item.id))}>-</button>
        <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: "10px" }}>Delete</button>
      </div>
    </div>
  );
}

const itemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "10px",
};
