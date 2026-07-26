import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [loading, setLoading] = useState(false);

  async function  handleLogin () {
    try{
    setLoading(true);
    const user={
      email,
      password
    }
    const response =await api.post("/auth/login",user)
    
    localStorage.setItem(
      "token",
      response.data.token
    )
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.token)
    )
    navigate("/Dashboard")
  }catch(error){
    setMessage(
      error.response?.data?.message || "Login failed"
    );
  }finally{
    setLoading(false)
  }
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">Placement Management System</h1>

        <input
          type="email"
          placeholder="Enter Email Address"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="login-input password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {message && (
          <p
            style={{
              color: messageColor,
              fontWeight: "bold",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;