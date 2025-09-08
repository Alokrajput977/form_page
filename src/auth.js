import React, { useState } from "react";
import "./auth.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AuthPage = () => {
  // State for login
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // State for register
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Login
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const result = await res.json();
      console.log("Login Response:", result);
      alert(result.message);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  // Handle Register
  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const result = await res.json();
      console.log("Register Response:", result);
      alert(result.message);
    } catch (err) {
      console.error("Register Error:", err);
    }
  };

  return (
    <div className="container">
      {/* Login Section */}
      <div className="login">
        <div className="container">
          <h1>Log in</h1>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <br />
          <input type="checkbox" id="remember" />
          <span>Remember me</span>
          <a href="#">Forgot password?</a>
          <button onClick={handleLogin}>Log in</button>
          <hr />
          <p>Or Connect With</p>
          <hr />
          <ul>
            <li><i className="fab fa-facebook-f fa-2x"></i></li>
            <li><i className="fab fa-twitter fa-2x"></i></li>
            <li><i className="fab fa-github fa-2x"></i></li>
            <li><i className="fab fa-linkedin-in fa-2x"></i></li>
          </ul>
          <div className="clearfix"></div>
          <span className="copyright">&copy; 2019</span>
        </div>
      </div>

      {/* Register Section */}
      <div className="register">
        <div className="container">
          <i className="fas fa-user-plus fa-5x"></i>
          <h2>Hello, friend!</h2>
          <p>Enter your personal details and start your journey with us</p>

          <input
            type="text"
            placeholder="Full Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />

          <button onClick={handleRegister}>
            Register <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
