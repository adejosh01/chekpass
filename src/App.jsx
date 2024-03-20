import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { HiEye, HiEyeOff } from "react-icons/hi";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handlePasswordVisibility = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="container mx-auto px-5 py-10 md:mt-24">
      <div className="w-full max-w-lg mx-auto space-y-5">
        <div className="flex items-center justify-center py-4 md:py-0 border-b border-b-gray-300 md:border-none w-full">
          <img src="./logo.png" alt="logo" className="text-center" />
        </div>
        <div className="flex items-center justify-center">
          <p className="font-bold text-lg md:text-[48px] whitespace-nowrap">Welcome back!</p>
        </div>
        <form>
          <div className="relative w-full rounded-lg mb-4 px-5 py-4 border font-semibold block outline-none focus:border-gray-800 hover:border-gray-800 peer">
            <input
              type="text"
              id="username"
              value={email}
              onChange={handleEmailChange}
              className="peer outline-none w-full"
            />
            <label
              htmlFor="username"
              className={`absolute left-0 text-gray-400 cursor-text px-5 transition-all ${
                email ? '-top-0' : 'top-4'
              } peer-focus:mt-1 peer-focus:text-sm peer-focus:-top-1`}
            >
              Email Address*
            </label>
          </div>

          <div className="w-full rounded-lg px-5 py-4 font-semibold block outline-none border focus:border-gray-800 hover:border-gray-800 relative peer">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordVisibility}
              className="peer w-full outline-none"
            />
            <label
              htmlFor="password"
              className={`absolute left-0 text-gray-400 cursor-text px-5 transition-all ${
                password ? '-top-0' : 'top-4'
              } peer-focus:mt-1 peer-focus:text-sm peer-focus:-top-1`}
            >
              Password*
            </label>
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-3 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <HiEye className="text-gray-600 w-6 h-6" />
              ) : (
                <HiEyeOff className="text-gray-600 w-6 h-6" />
              )}{" "}
              {/* Conditional rendering of the eye icons based on showPassword state */}
            </button>
          </div>
          <a href="/" className="flex items-end justify-end mt-2 font-bold text-[14px]">
            Forgot password?
          </a>

          <button
            type="submit"
            className="bg-red-600 text-white font-bold text-lg py-4 px-8 mt-14 w-full rounded-lg my-6 hover:bg-red-500"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Do not have an account?<span className="ml-4 font-bold">Sign up</span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default App;
