import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import Footer from "./components/footer.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import PrivateRoute from "./admin/PrivateRoute.jsx";

const Home = lazy(() => import("./routes/home"));
const About = lazy(() => import("./routes/about"));
const Projects = lazy(() => import("./routes/projects"));
const ProjectDetail = lazy(() => import("./routes/ProjectDetail"));
const Contact = lazy(() => import("./routes/contact"));
const Donors = lazy(() => import("./routes/donors"));
const Donate = lazy(() => import("./routes/donate"));
const Team = lazy(() => import("./routes/Team"));
const FAQ = lazy(() => import("./routes/faq"));
const Blog = lazy(() => import("./routes/blog"));
const Gallery = lazy(() => import("./routes/gallery"));
const Privacy = lazy(() => import("./routes/privacy"));
const Terms = lazy(() => import("./routes/terms"));
const NotFound = lazy(() => import("./routes/NotFound"));

const AdminLogin = lazy(() => import("./admin/Login"));
const AdminDashboard = lazy(() => import("./admin/Dashboard"));
const AdminProjects = lazy(() => import("./admin/ProjectsManager"));
const AdminBlog = lazy(() => import("./admin/BlogManager"));
const AdminGallery = lazy(() => import("./admin/GalleryManager"));
const AdminFaqs = lazy(() => import("./admin/FaqsManager"));
const AdminPartners = lazy(() => import("./admin/PartnersManager"));
const AdminTeam = lazy(() => import("./admin/TeamManager"));
const AdminMessages = lazy(() => import("./admin/MessagesManager"));

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/project" element={<><Header /><Projects /><Footer /></>} />
          <Route path="/project/:slug" element={<><Header /><ProjectDetail /><Footer /></>} />
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
          <Route path="/donors" element={<><Header /><Donors /><Footer /></>} />
          <Route path="/donate" element={<><Header /><Donate /><Footer /></>} />
          <Route path="/team" element={<><Header /><Team /><Footer /></>} />
          <Route path="/faq" element={<><Header /><FAQ /><Footer /></>} />
          <Route path="/blog" element={<><Header /><Blog /><Footer /></>} />
          <Route path="/gallery" element={<><Header /><Gallery /><Footer /></>} />
          <Route path="/privacy" element={<><Header /><Privacy /><Footer /></>} />
          <Route path="/terms" element={<><Header /><Terms /><Footer /></>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="faqs" element={<AdminFaqs />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="messages" element={<AdminMessages />} />
          </Route>
          <Route path="*" element={<><Header /><NotFound /><Footer /></>} />
        </Routes>
      </Suspense>
      <BackToTop />
    </div>
  );
}

export default App;
