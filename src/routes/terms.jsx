import Seo from "../components/Seo";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <Seo title="Terms of Service" path="/terms" />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Terms of Service
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Last updated: May 2026
          </p>
        </div>

        <div className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-200 sm:px-8 lg:px-10">
          <div className="space-y-6 text-sm leading-8 text-slate-700 sm:text-base">
            <p>
              By accessing or using the Poor Women Support Organization (PWSO) website, you agree to be bound by these terms. If you do not agree, please do not use our site.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Use of Content</h3>
            <p>
              All content on this website, including text, images, and logos, is the property of PWSO unless otherwise noted. You may not reproduce, distribute, or modify content without our written permission.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Donations</h3>
            <p>
              Donations made through our website are processed securely. PWSO reserves the right to redirect funds to areas of greatest need if a specific program is fully funded.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Limitation of Liability</h3>
            <p>
              PWSO is not liable for any damages arising from the use or inability to use this website. We strive to keep information accurate but make no guarantees about completeness or timeliness.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Changes</h3>
            <p>
              We may update these terms at any time. Changes will be posted on this page with an updated revision date.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Contact</h3>
            <p>
              For questions about these terms, contact{" "}
              <a href="mailto:info@pwso.org" className="text-sky-600 hover:underline">info@pwso.org</a>.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="text-sm font-semibold text-sky-600 hover:text-sky-800"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Terms;
