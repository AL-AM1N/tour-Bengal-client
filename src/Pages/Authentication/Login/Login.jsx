import React from "react";

const Login = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Username</label>
              <input
                className="input"
                placeholder="Username"
                
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
              <button className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
