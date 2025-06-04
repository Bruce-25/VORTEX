import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './styling/Signup.css';
import Footer from "./Footer";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // Dark mode detection based on system preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener("change", (e) => setDarkMode(e.matches));
  }, []);

  const register = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we submit your details...");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", number);

      const response = await axios.post("https://bruce25.pythonanywhere.com/api/signup", data);

      setLoading("");
      setSuccess(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setNumber("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <section className={`row justify-content-center mt-3 signup-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="col-md-6 card shadow p-2">
        <h3>Sign Up</h3>
        <b className="alert text-success"></b>
        {loading}
        <b className="text-success">{loading}</b>
        <b className="text-success">{success}</b>
        <b className="text-danger">{error}</b>
        <form onSubmit={register}>
          <div className="form-floating mb-3">
            <input 
              type="text" 
              id="username" 
              className="form-control" 
              placeholder="Enter Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-floating mb-3">
            <input 
              type="email" 
              id="email" 
              className="form-control" 
              placeholder="Enter Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-floating mb-3">
            <input 
              type="password" 
              id="password" 
              className="form-control" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-floating mb-3">
            <input 
              type="text" 
              id="phone" 
              className="form-control" 
              placeholder="Enter Phone" 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              required 
            />
            <label htmlFor="phone">Phone Number</label>
          </div>

          <button className="btn btn-outline-info">Sign Up</button>

          <p>Already have an account? <Link to="/signin" className="text-info">Sign In</Link></p>
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default Signup;