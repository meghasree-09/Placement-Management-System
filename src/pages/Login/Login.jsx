import { useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./Login.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  //loading state
  const [loading,setLoading]=useState(false);

  const handleLogin = () => {
    setLoading(true)
    setTimeout(()=>{
         if (email === "mouni@gmail.com" && password === "mouni22") {
      setMessage("Login Successful");
      setMessageColor("green");

      setTimeout(() => {
        setIsLoggedIn(true);
      }, 2000);
    } else {
      setMessage(" Invalid Email or Password");
      setMessageColor("red");
    }
    setLoading(false);

    },2000);
   
  };

  if (isLoggedIn) {
    return <Dashboard />;
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
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;