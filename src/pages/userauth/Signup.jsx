import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUserSignup } from "../../services/auth";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleVisibility = () => setShowPass(!showPass);

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      userName,
      fullName,
      email,
      password,
      phone,
    };

    try {
      const response = await apiUserSignup(userData); // Call the API to sign up
      if (response.status === 201) {
        toast.success("User registered"); // Show success toast
        navigate("/login"); // Redirect to the login page after successful signup
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup failed! Please try again."); // Show error toast
    }
  };

  return (
    <section className="h-[100vh] bg-indigo-900 py-[3%] px-[15%]">
      <ToastContainer />
      <div className="h-[100%] bg-white w-[100%]  flex">
        <div className="w-[30%] bg-gray-500  bg-[url('https://i.pinimg.com/564x/45/22/f4/4522f470b71fcc72bfecd9ea37d12c68.jpg')] bg-cover bg-center"></div>
        <div className="w-[75%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
          <div className="h-[10%] mb-[0.5em] flex">
            <h1 className="text-[1.8em] font-semibold">Welcome! Start by Signing Up</h1>
          </div>
          <form onSubmit={handleSignup} className="grid grid-rows-3 grid-cols-2 gap-x-[15%] px-[5%]">
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="h-[80%] border-b-2"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputProps={{
                  required: true,
                  autoFocus: true,
                }}
                containerClass="h-[80%]"
                inputClass="border-b-2 h-full focus:outline-none"
                id="tel"
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Full Name"
                className="h-[80%] border-b-2"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="h-[80%] border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="password">Password</label>
              <div className="flex items-center">
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  placeholder="*******"
                  className="h-[80%] border-b-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="ml-[-1em] cursor-pointer text-gray-800" onClick={toggleVisibility}>
                  <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                </div>
              </div>
            </div>
            <button
              className="col-span-2 mt-[1em] h-[40px] w-[150px] bg-indigo-300 text-center text-black  rounded-md shadow-md hover:bg-indigo-800 transition-all duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="flex flex-col items-start pl-[5%]">
            <p className="mt-[1em] mb-[0.5em] text-center">
              Already have an account? <Link to="/login" className="text-indigo-900 font-semibold">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
