import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import Signup from "./pages/userauth/Signup";
import Login from "./pages/userauth/Login";
import { ToastContainer } from "react-toastify";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import ContactUs from "./pages/landingPage/components/ContactUs";
import BecomeSupport from "./pages/landingPage/components/BecomeSupport";
import UpdateProfile from "./pages/userDashboard/UpdateProfile";
import StressBallPage from "./pages/userDashboard/StressBallPage";
import AssessmentPage from "./pages/userDashboard/AssessmentPage";
import PeerTherapistsList from "./pages/userDashboard/PeerTherapistList";
import PeerTherapistDetail from "./pages/userDashboard/PeerTherapistDetail";
import ProfessionalTherapistsList from "./pages/userDashboard/professional/ProfessionalTherapistList";
import ProfessionalTherapistDetail from "./pages/userDashboard/professional/ProfessionalTherapistDetails";
import EmotionDiaryPage from "./pages/items/EmotionDairyPage";

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
    {
      path: "/profileupdate",
      element: <UpdateProfile />
    },
    {
      path: "/emotiondairy",
      element: <EmotionDiaryPage />
    },
    {
      path: "/stressball",
      element: <StressBallPage />
    },
    {
      path: "/assessment",
      element: <AssessmentPage />
    },
    {
      path: "/peer-therapists",
      element: <PeerTherapistsList />
    },
    {
      path: "/peer-therapist/:id",
      element: <PeerTherapistDetail />
    },
    {
      path: "/professional-therapists",
      element: <ProfessionalTherapistsList />
    },
    {
      path: "/professional-therapist/:id",
      element: <ProfessionalTherapistDetail />
    },
  ]);
  return (
    <><RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar  /></>
    
  );
}
export default App;