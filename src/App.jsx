import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (selectedRole) => {
    if (username.trim() !== "") {
      setRole(selectedRole);
    } else {
      alert("Please enter username");
    }
  };

  const handleLogout = () => {
    setUsername("");
    setRole("");
  };

  // Login Page
  if (role === "") {
    return (
      <div className="container">
        <h1>Login Form</h1>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="buttons">
          <button onClick={() => handleLogin("Admin")}>
            Login as Admin
          </button>

          <button onClick={() => handleLogin("Viewer")}>
            Login as Viewer
          </button>
        </div>
      </div>
    );
  }

  // After Login
  return (
    <div className="container">
      <h1>
        Welcome, {username} ({role})
      </h1>

      {role === "Admin" ? (
        <button>Delete Post</button>
      ) : (
        <p>Read-only access</p>
      )}

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default App;