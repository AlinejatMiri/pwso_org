import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import Footer from "./components/footer.jsx";

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

function App() {
  return (
    <div className="min-h-screen w-full max-w-[2000px] mx-auto bg-gray-50">
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
          <Route path="*" element={<><Header /><NotFound /><Footer /></>} />
        </Routes>
      </Suspense>
      <BackToTop />
    </div>
  );
}

export default App;
