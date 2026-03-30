import React from 'react'
import { useState } from "react";

function Login({ onSuccess }) {

     const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      onSuccess();
    } else {
      alert("Wrong username or passward");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Admin Login</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label" >Username</label>
          <input className="input" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
          <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login
