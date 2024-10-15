import React, { useState } from 'react';
import { User, Lock, Mail, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    console.log("form submitted", email,password);
    
    setError('');

  }
  //   try {
  //     // Replace this with your actual API call
  //     const response = await fetch('https://api.example.com/signin', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Sign in failed. Please check your credentials.');
  //     }

  //     const data = await response.json();
  //     console.log('Sign in successful:', data);
  //     // Handle successful sign in (e.g., store token, redirect)
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white ">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:block w-1/2 bg-cover bg-center relative" style={{backgroundImage: "url('https://media.istockphoto.com/id/1401715786/photo/happy-family-piggybacking-after-buying-a-new-car-in-a-showroom.jpg?s=612x612&w=0&k=20&c=hnNdjcrSmKQAsP4A7KFU_BWrJVMk2evUxaViNdo_LZA=')"}}>
        </div>
        <div className="text-white absolute px-10">
              <h1 className="text-4xl font-bold mt-[350px] ml-[40px]">A whole new world <br /> of Cars</h1>
            </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Please sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
            </div>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>
            {error && (
              <div className="flex items-center text-red-500">
                <AlertCircle size={20} className="mr-2" />
                <span>{error}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <div className="mt-8">
            <p className="text-center text-sm text-gray-600">Or sign in with</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.066 18.708c-.243.539-.961.444-1.332.061-1.992-1.375-4.511-1.686-7.478-1.686-1.553 0-3.242.124-4.621.369-.538.095-1.064-.33-.957-.869.106-.536.611-.762 1.152-.855 1.556-.266 3.145-.383 4.727-.383 3.264 0 6.103.367 8.581 1.898.462.288.609.862.366 1.401zm1.356-3.014c-.289.644-1.147.551-1.658.09-2.389-1.65-5.462-2.148-9.089-2.148-1.863 0-3.876.16-5.543.467-.637.117-1.264-.396-1.135-1.033.129-.636.724-.895 1.363-1.013 1.961-.355 4.193-.535 6.315-.535 3.926 0 7.39.569 10.233 2.402.55.35.723 1.026.434 1.67zm.116-3.113c-.291.646-1.152.572-1.674.124-2.846-1.964-7.184-2.566-10.812-2.566-2.236 0-4.65.214-6.712.644-.764.159-1.513-.474-1.361-1.238.152-.764.86-1.07 1.627-1.229 2.352-.493 5.021-.742 7.446-.742 4.216 0 8.825.7 12.094 2.94.659.455.862 1.222.571 1.867z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;