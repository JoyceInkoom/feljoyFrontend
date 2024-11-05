import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
// import { signupClient } from '../services/api'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState(""); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setShowPass(!showPass);

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      businessName: businessName || undefined, // Make business name optional
      phoneNumber,
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await signupClient(userData); // Call the API to sign up
      console.log(response);
      toast.success("Signup successful!"); // Success toast
      // Redirect or perform any additional actions here
    } catch (error) {
      console.error(error);
      toast.error("Signup failed! Please try again."); // Error toast
    }
  };

  return (
    <section className="h-[100vh] bg-[#c5e0b5] py-[3%] px-[15%]">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="h-[100%] bg-white w-[100%] rounded-3xl flex">
        <div className="w-[30%] bg-[#0d8a2e] rounded-3xl"></div>
        <div className="w-[75%] bg-[white] rounded-3xl z-1 flex flex-col pt-[3%] pl-[5%] pr-[5%]">
          <div className="h-[10%] mb-[0.5em] flex">
            <h1 className="text-[1.8em] font-semibold">Welcome, Create an account with us</h1>
          </div>
          <p className="text-center mb-[0.5em]">Sign Up with</p>
          <div className="flex justify-center items-center gap-x-[5%] mb-[5%]">
            <button className="w-[100%] h-[100%] flex items-center pt-[0.3em]">
              <FaGoogle className="h-[1.5em] ml-[10%] mr-[5%]" />
              <p>Google</p>
            </button>
            <button className="w-[100%] h-[100%] flex items-center pt-[0.3em]">
              <FaApple className="h-[1.5em] ml-[10%] mr-[5%]" />
              <p>Apple</p>
            </button>
            <button className="w-[100%] h-[100%] flex items-center pt-[0.3em]">
              <FaFacebook className="h-[1.5em] ml-[10%] mr-[5%]" />
              <p>Facebook</p>
            </button>
          </div>
          <hr />
          <h2 className="font-semibold text-center mt-[-0.8em] w-[10%] mx-auto mb-[0.5em]">OR</h2>
          <form onSubmit={handleSignup} className="grid grid-rows-3 grid-cols-2 gap-x-[15%] px-[5%]">
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="business">Business Name (optional)</label>
              <input
                type="text"
                id="business"
                placeholder="BestLife Ent."
                className="h-[80%] border-b-2"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)} // Update state on change
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
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
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                placeholder="John"
                className="h-[80%] border-b-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} // Update state on change
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Doe"
                className="h-[80%] border-b-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} // Update state on change
              />
            </div>
            <div className="h-[100%] pb-[1em] pl-[0.5em]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="h-[80%] border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
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
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
                <div className="ml-[-1em] cursor-pointer text-[#0d8a2e]" onClick={toggleVisibility}>
                  <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                </div>
              </div>
            </div>
          </form>
          <div className="flex flex-col items-start pl-[5%]">
            <div className="flex items-center">
              <input type="checkbox" id="checkbox" className="accent-[#0d8a2e] mr-[1em]" />
              <label htmlFor="checkbox" className="text-[#616161]">
                I agree to the <Link to="/terms" className="underline decoration-dashed underline-offset-4">Terms and Conditions</Link>
              </label>
            </div>
            <div className="flex flex-col items-center">
              <button className="mt-[1em] h-[40px] w-[150px] bg-[#0d8a2e] text-center text-[white] font-bold rounded-md shadow-md hover:bg-[#0b5e23] transition-all duration-300" type="submit">Sign Up</button>
              <p className="mt-[0.5em] mb-[0.5em] text-center">
                Already have an account? <Link to="/clientlogin" className="text-[#0d8a2e] font-semibold">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
