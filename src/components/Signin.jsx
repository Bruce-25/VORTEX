import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styling/Signin.css'; // Assuming you've got the styles in this file
import Footer from "./Footer.";

const Signin = () => {

  // Initialize hooks to store user input and handle loading, success, and error states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Navigate hook to redirect the user after successful login
  const navigate = useNavigate();

  // Function to handle the user sign-in logic
  const login = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    setLoading("Please wait while we log you in...");

    try {
      // Create a new FormData object to send user details to the API
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      // Make API request to the sign-in endpoint
      const response = await axios.post("https://Bruce25.pythonanywhere.com/api/signin", data);

      // Check if user data is returned successfully
      if (response.data.user) {
        setLoading(""); // Hide loading message
        navigate("/"); // Redirect to homepage after successful login
      } else {
        setLoading(""); // Hide loading message
        setError("Invalid login details"); // Display error message
      }
    } catch (error) {
      setLoading(""); // Hide loading message
      setError(error.message); // Display error message if something goes wrong
    }
  };

  return (
    <div className="fashion-container">
      <div className="fashion-card">
        <h2 className="fashion-title">Sign In</h2>

        {/* Display messages for loading, success, or error */}
        {loading && <b className="text-success">{loading}</b>}
        {success && <b className="text-success">{success}</b>}
        {error && <b className="text-danger">{error}</b>}

        <form onSubmit={login}>
          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            className="fashion-input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            className="fashion-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit button */}
          <button className="fashion-button" type="submit">Enter</button>

          {/* Forgot password link */}
          <p className="fashion-footer">
            <span className="fashion-link">Forgot password?</span>
          </p>

          {/* Link to signup page */}
          <p>Don't have an account? <Link to={'/signup'} className="text-info">Sign Up</Link></p>
        </form>

        <Footer/>
      </div> <br /> <br />
      
    </div> 
    
  );
};

export default Signin;