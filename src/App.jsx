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

import AddArticleForm from "./pages/items/AddArticleForm";
import AddVideoForm from "./pages/items/AddVideoForm";
import AddEbookForm from "./pages/items/AddEbookForm";
import ArticleDetails from "./pages/items/ArticleDetails";
import VideoDetails from "./pages/items/VideoDetails";
import EbookDetails from "./pages/items/EbookDetails";
import SharedWith from "./pages/items/SharedWith";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import GetAllUsers from "./pages/admin/GetAllUsers";
import AdminAddArticle from "./pages/admin/AminAddArticle";
import AdminAddVideo from "./pages/admin/AdminAddVideo";
import AdminAddEbook from "./pages/admin/AdminAddEbook";
import PostAssessment from "./pages/admin/PostAssessment";
import GetResponses from "./pages/admin/GetResponses";
import UpdateStatus from "./pages/admin/UpdateStatus";
import GetCertificates from "./pages/admin/GetCertificates";
import UpdateTherapistStatus from "./pages/admin/UpdateTherapistStatus";
import Chatroom from "./pages/chat/Chatroom";
import ChatSessions from "./pages/chat/ChatSessions";
import Celebrations from "./pages/celebrations/Celebrations";
import CelebrationsPage from "./pages/celebrations/CelebrationsPage";


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
  {
    path: "/admindashboard",
    element: <AdminDashboard />
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />
  },
  {
    path: "/allusers",
    element: <GetAllUsers />
  },
  {
    path: "/adminaddarticle",
    element: <AdminAddArticle />
  },
  {
    path: "/adminaddvideo",
    element: <AdminAddVideo />
  },
  {
    path: "/adminaddebook",
    element: <AdminAddEbook />
  },
  {
    path: "/postassessment",
    element: <PostAssessment />
  },
  {
    path: "/responses",
    element: <GetResponses />
  },
{
path: "/admin/update-status/:id",
element: <UpdateStatus />
},
{
  path: "/certificates",
  element: <GetCertificates />
  },
  {
    path: "/admin/update/certificate-status/:id",
    element: <UpdateTherapistStatus />
  },
  {
    path: "/chatroom/:therapistId",
    element: <Chatroom />
  },
  {
    path: "/chatroom",
    element: <ChatSessions />
  },
  {
    path: "/post-celebration",
    element: <Celebrations />
  },
  {
    path: "/celebrations",
    element: <CelebrationsPage />
  },
 
  ]);
  return (
    <><RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar  /></>
    
  );
}
export default App;