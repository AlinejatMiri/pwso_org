import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Seo title="Page Not Found" path="" />
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-bold text-sky-600">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Page Not Found</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          The page you are looking for does not exist or has been moved. Please check the URL or navigate back to the homepage.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
