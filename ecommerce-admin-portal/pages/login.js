import React from "react";

const login = () => {
  return (
    <>
      <div className="w-1/5 m-auto py-8 my-16 h-full p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h2 className="text-center text-red-600 font-bold text-3xl font-mono">
          Log-In
        </h2>
        <div className="flex flex-col justify-center">
          <label>Email:</label>
          <input
            type="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
          <label>Password:</label>
          <input
            type="password"
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <button className="px-3 py-3 rounded-3xl bg-orange-400 mt-1 w-50 border  hover:bg-orange-500 font-semibold border-black-300">
            Login
          </button>
        </div>
        <div className="flex flex-col ">
          <span className="text-center">Create an account</span>
          <button className="bg-blue-500 py-3 px-3 rounded-3xl hover:bg-blue-600">Register</button>
        </div>
      </div>
    </>
  );
};

export default login;
