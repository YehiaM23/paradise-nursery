import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/products");
  };

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>Explore a wide variety of houseplants to brighten your home and office.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}
