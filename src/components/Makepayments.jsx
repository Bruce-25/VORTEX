import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import './styling/Makepayment.css';
import Footer from "./Footer";

const Makepayments = () => {
  const { totalCost } = useLocation().state || {};

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const payNow = async (e) => {
    e.preventDefault();
    setLoading("Processing payment...");

    try {
      const data = new FormData();
      data.append("amount", totalCost);
      data.append("phone", phone);

      const response = await axios.post(
        "https://Bruce25.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setLoading("");
      setSuccess(response.data.message);
      setPhone("");
    } catch (err) {
      setLoading("");
      setError(err.message);
    }
  };

  return (
    <div className="row mt-4 p-3">
      {/* Payment Summary */}
      <div className="col-md-6 offset-md-3">
        <div className="card shadow-sm border-0 text-center p-4">
          <h3 className="text-primary fw-bold">Total Payment</h3>
          <h1 className="text-danger fw-bold mb-3">KES {totalCost}</h1>
          <h5 className="text-success fw-semibold">LIPA NA M-PESA</h5>

          <form className="mt-4" onSubmit={payNow}>
            {loading && <div className="alert alert-info">{loading}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <input
              type="number"
              value={totalCost}
              readOnly
              className="form-control mb-3"
            />

            <input
              type="number"
              placeholder="Enter phone (e.g., 2547XXXXXXXX)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control mb-4"
              required
            />

            <button className="btn btn-dark w-100 fw-bold">Pay Now</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Makepayments;