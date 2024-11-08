import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiUserLogin } from "../../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await apiUserLogin(userData); // Call the API to log in
      if (response.status === 200) {
        toast.success("Login successful!"); // Success toast
        navigate('/userdashboard'); 
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed! Please check your credentials."); // Error toast
    }
  };

  return (
    <section className="h-screen bg-gray-800 flex items-center justify-center bg-[url('https://i.pinimg.com/564x/db/28/74/db287451e204eb9c5f334a811e9bab47.jpg')] bg-cover bg-center">
      <ToastContainer /> 
      <div className="bg-white rounded-3xl flex shadow-lg w-[90%] max-w-[500px]">
        <div className="w-[30%] bg-gray-800 rounded-3xl"></div>
        <div className="w-[70%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
          <div className="h-[10%] mb-[2em] flex">
            <h1 className="text-[1.8em] font-semibold">Welcome Back!</h1>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col">
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="h-[80%] border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="*******"
                className="h-[80%] border-b-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                className="mt-[1em] h-[40px] w-[150px] bg-gray-800 text-center text-[white] font-bold rounded-md shadow-md hover:bg-[#0b5e23] transition-all duration-300"
                type="submit"
              >
                Login
              </button>
              <p className="mt-[0.5em] mb-[0.5em] text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-gray-900 font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
