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
import ExercisePage from "./pages/items/ExercisePage";
import ResourcesPage from "./pages/items/ResourcesPage";
import PtDashboard from "./pages/pt dashboard/PtDashboard";
import ChatRoom from "./pages/items/Chatroom";
import AddArticleForm from "./pages/items/AddArticleForm";
import AddVideoForm from "./pages/items/AddVideoForm";
import AddEbookForm from "./pages/items/AddEbookForm";
import ArticleDetails from "./pages/items/ArticleDetails";
import VideoDetails from "./pages/items/VideoDetails";
import EbookDetails from "./pages/items/EBookDetails";
import SharedWith from "./pages/items/SharedWith";

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
      path: "/meditation",
      element: <ExercisePage />
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
    {
      path: "/resources",
      element: <ResourcesPage />
    },
    {
      path: "/resources/article/:id",
      element: <ArticleDetails />
    },
    {
      path: "/resources/video/:id",
      element: <VideoDetails />
    },
    {
      path: "/resources/book/:id",
      element: <EbookDetails />
    },
  // {
  //   path: "/resource/:type/:id",
  //   element: <ResourceDetailsPage />
  // },
  {
    path: "/chatroom/:id",
    element: <ChatRoom/>
  },
  {
    path: "/therapist-dashboard",
    element: <PtDashboard />
  },
  {
    path: "/addarticle",
    element: <AddArticleForm />
  },
  {
    path: "/addvideo",
    element: <AddVideoForm />
  },
  {
    path: "/addebook",
    element: <AddEbookForm />
  },
  {
    path: "/clientmoods",
    element: <SharedWith />
  },
  ]);
  return (
    <><RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar  /></>
    
  );
}
export default App;