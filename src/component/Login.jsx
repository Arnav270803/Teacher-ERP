import React from 'react';

const Login = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <div className='relative bg-white p-10 rounded-xl text-slate-500 max-w-md w-full mx-4'>
        
        <div className="absolute top-4 right-4 w-4 h-4 hover:scale-125 cursor-pointer transition-all duration-300">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-center text-2xl text-neutral-700 font-medium">Login</h1>
        <p className="text-sm text-center mb-6">Welcome back! Please sign in to continue</p>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <div className="w-5 h-5 text-gray-400">
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              colors="primary:#848484,secondary:#ee66aa"
            ></lord-icon>
          </div>
          <input
            type="email"
            className="outline-none text-sm flex-1"
            placeholder="Email id"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <div className="w-5 h-5 text-gray-400">
          <lord-icon
            src="https://cdn.lordicon.com/fgxwhgfp.json"
            trigger="hover"
            colors="primary:#848484,secondary:#f49cc8"
          ></lord-icon>
          </div>
          <input
            type="password"
            className="outline-none text-sm flex-1"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 transition-colors">
          Login
        </button>

        <p className="mt-5 text-center">
          Don't have an account?{' '}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;