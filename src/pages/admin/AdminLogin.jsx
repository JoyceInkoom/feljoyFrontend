import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUserLogin } from "../../services/auth";

const AdminLogin = () => {
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
        const { accessToken } = response.data; // Ensure correct destructuring for token
        localStorage.setItem("authToken", accessToken); // Store the token in localStorage
        toast.success("Login successful!"); // Success toast
        navigate("/admindashboard"); // Redirect to dashboard
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed! Please check your credentials."); // Error toast
    }
  };

  return (
    <section className="h-screen bg-indigo-900 flex items-center justify-center bg-[url('https://i.pinimg.com/236x/4b/0d/dd/4b0ddd7bfa1ff7052b74fc00726a9ab5.jpg')] bg-cover bg-center">
      <ToastContainer />
      <div className="bg-white  flex shadow-lg w-[90%] max-w-[500px]">
        <div className="w-[30%] bg-indigo-900"></div>
        <div className="w-[70%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
          <div className="h-[10%] mb-[2em] flex">
            <h1 className="text-[1.8em] font-semibold">Welcome Admin!</h1>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col">
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label className="mr-1" htmlFor="email">
                Email
              </label>
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
              <label className="mr-1" htmlFor="password">
                Password
              </label>
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
                className="mt-[1em] h-[40px] w-[150px] bg-indigo-200 text-center text-black  rounded-md shadow-md hover:bg-indigo-800 transition-all duration-300"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;