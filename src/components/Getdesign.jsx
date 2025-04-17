import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.";
import Carousel from "./Carousel"; // ✅ Carousel imported


const Getproducts = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const img_url = "https://Bruce25.pythonanywhere.com/static/images/";

  const fetchProducts = async () => {
    setLoading("PLiz wait as we retrieve products");
    try {
      const response = await axios.get("https://Bruce25.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [search, setSearch] = useState("");
  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     
      {/* ✅ Carousel bound here */}
      <Carousel />

      <div className="row">
        <div className="col-md-4"> </div>
        <div className="col-md-4">
          <div className="col-md-4"></div>
          <div className="col-md-4"> </div>

          {/* Search functionality */}
          <input
            type="search"
            placeholder="Search for product name"
            className="form-control text-danger bg-info"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row p-2">
        {loading}
        {error}

        {filtered_products.map((product) => (
          <div className="col-md-3 justify-content-center mt-3" key={product.id}>
            <div className="card shadow p-1">
              <img src={img_url + product.product_photo} alt="" className="product_img" />

              <div className="card-body">
                <h5 className="text-primary">{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 50)}</p>
                <b className="text-warning">
                  {product.product_cost} <span className="text-dark">Kes</span>
                </b>
                <br />
                <button
                  className="btn btn-outline-info"
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;
