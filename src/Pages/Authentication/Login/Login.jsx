import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signInUser} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
    .then((result) => {
      console.log(result);
      navigate(from);
    })
    .catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Please Login</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email required</p>
                )}

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Password"
                />

                {/* handleding errors */}
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 charecters</p>
                )}
                <p>
                  Create account?{" "}
                  <Link to="/register">
                    <span className="font-bold underline">Register</span>
                  </Link>
                </p>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
