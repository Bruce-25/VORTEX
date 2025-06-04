import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Chatbotwidget from "./Chatbotwidget";

const Getdesign = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const img_url = "https://Bruce25.pythonanywhere.com/static/images/";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading("Please wait as we retrieve products...");
      try {
        const response = await axios.get("https://Bruce25.pythonanywhere.com/api/getproducts");
        setProducts(response.data);
        setLoading("");
      } catch (error) {
        setLoading("");
        setError("Failed to load products.");
      }
    };

    fetchProducts();
  }, []);

  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = existingCart.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      // Update quantity if item exists
      existingCart[existingIndex].quantity = (existingCart[existingIndex].quantity || 1) + 1;
    } else {
      // Add new item with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${product.product_name} added to cart`);
  };

  return (
    <div>
      <Carousel />

      <div className="row my-3">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <input
            type="search"
            placeholder="Search for product name"
            className="form-control text-danger bg-info"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row p-2">
        {loading && <p className="text-center">{loading}</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        {filtered_products.map((product) => (
          <div className="col-md-3 justify-content-center mt-3" key={product.id}>
            <div className="card shadow p-1 h-100">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="product_img"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="text-primary">{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 50)}...</p>
                <b className="text-warning">
                  {product.product_cost} <span className="text-dark">KES</span>
                </b>
                <div className="mt-3">
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => navigate("/makepayment", { state: { product } })}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <Chatbotwidget />
    </div>
  );
};

export default Getdesign;
