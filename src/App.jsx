import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import Signup from "./pages/userauth/Signup";
import Login from "./pages/userauth/Login";
import { ToastContainer } from "react-toastify";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import ContactUs from "./pages/landingPage/components/ContactUs";
import BecomeSupport from "./pages/landingPage/components/BecomeSupport";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/userdashboard",
      element: <UserDashboard />
    },
    {
      path: "/contactus",
      element: <ContactUs />
    },
    {
      path: "/becomesupport",
      element: <BecomeSupport />
    },
  ]);
  return (
    <><RouterProvider router={router} />
    <ToastContainer /></>
    
  );
}
export default App;