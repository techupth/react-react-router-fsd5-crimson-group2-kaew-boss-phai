import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    const results = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );

    setProduct(results.data.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
