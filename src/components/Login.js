import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-36 right-0 left-0 bg-black mx-auto text-white bg-opacity-85 rounded-lg">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-800"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full  bg-gray-800"
        ></input>
        <button className="py-3 my-3 w-full bg-red-600 rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
