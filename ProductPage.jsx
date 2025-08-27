import React from "react";
import PlantCard from "../components/PlantCard";

// Sample plant data
const plants = [
  { id: 1, name: "Aloe Vera", price: 10, image: "/plants/aloe.jpg", category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, image: "/plants/snake.jpg", category: "Succulent" },
  { id: 3, name: "Peace Lily", price: 20, image: "/plants/peace.jpg", category: "Flowering" },
  { id: 4, name: "Spider Plant", price: 12, image: "/plants/spider.jpg", category: "Foliage" },
  { id: 5, name: "Monstera", price: 25, image: "/plants/monstera.jpg", category: "Foliage" },
  { id: 6, name: "Orchid", price: 30, image: "/plants/orchid.jpg", category: "Flowering" },
];


export default function ProductPage() {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: "20px" }}>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === category).map(p => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
