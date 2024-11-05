import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import Signup from "./pages/userauth/Signup";
import Login from "./pages/userauth/Login";
import { ToastContainer } from "react-toastify";

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
  ]);
  return (
    <><RouterProvider router={router} />
    <ToastContainer /></>
    
  );
}
export default App;