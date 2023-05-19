import React from "react";

const register = () => {
  return (
    <>
      <div className="w-2/5 p-5 mx-auto my-16 h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className=" text-red-600 font-bold text-3xl font-mono text-center ">
          <h3>Register</h3>
          <span className="font-semibold text-xl">Create an account</span>
        </div>
        <div className="flex gap-4 justify-center">
          <div className=''>
            <label>Full-Name:</label>
            <input
              type="text"
              placeholder="Enter Your Full-Name"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
        </div>
            <div className="flex justify-center">
            <button className="mt-2 bg-orange-400 px-5 py-2 rounded-3xl hover:bg-orange-500">
              Register
            </button>
            </div>
      </div>
    </>
  );
};

export default register;
