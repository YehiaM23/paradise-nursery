import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    setAdded(true);
  };

  return (
    <div style={cardStyle}>
      <img src={plant.image} alt={plant.name} style={{ width: "150px", height: "150px" }} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
  margin: "10px",
};
