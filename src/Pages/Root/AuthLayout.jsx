import React from "react";
import { Outlet } from "react-router";
import AuthAnimation from "../../components/AuthAnimation/AuthAnimation";

const AuthLayout = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <AuthAnimation></AuthAnimation>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
