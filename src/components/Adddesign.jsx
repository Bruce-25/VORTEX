import axios from "axios";
import { useState } from "react";
import './styling/Adddesign.css';
import Footer from "./Footer.";

const Addproduct = () => {
  // Initialize the useState hooks to hold data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const uploadProduct = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload the product...");

    try {
      const data = new FormData();
      data.append("product_name", name);
      data.append("product_description", description);
      data.append("product_cost", price);
      data.append("product_photo", image);

      const response = await axios.post("https://Bruce25.pythonanywhere.com/api/addproduct", data);

      setLoading("");
      setSuccess(response.data.message);

      setName("");
      setDescription("");
      setPrice("");
      setImage("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="container-fluid add-product-page">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 card product-form-container">
          <h3 className="form-title">Add Product</h3>
          <div className="status-message">
            <b className="text-success">{success}</b>
            <b className="text-danger">{error}</b>
          </div>

          <form onSubmit={uploadProduct}>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="productName"
                className="form-control text-danger"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="productName">Product Name</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                id="productDescription"
                className="form-control text-danger"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <label htmlFor="productDescription">Description</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                id="productPrice"
                className="form-control text-danger"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <label htmlFor="productPrice">Price</label>
            </div>

            <div className="form-floating mb-3">
              <label htmlFor="productImage">Upload Image</label>
              <input
                type="file"
                id="productImage"
                accept="image/*"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button className="btn btn-submit">Add Product</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Addproduct;