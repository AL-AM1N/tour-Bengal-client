import React from "react";
import { Link, Outlet } from "react-router";
import AuthAnimation from "../../components/AuthAnimation/AuthAnimation";

const AuthLayout = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h1 className="font-serif font-bold text-4xl">
            Tour
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-yellow-500">
              Bengal
            </span>
          </h1>
        </Link>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <AuthAnimation></AuthAnimation>
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
