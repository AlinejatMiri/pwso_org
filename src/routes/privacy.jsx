import Seo from "../components/Seo";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <Seo title="Privacy Policy" path="/privacy" />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Last updated: May 2026
          </p>
        </div>

        <div className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-200 sm:px-8 lg:px-10">
          <div className="space-y-6 text-sm leading-8 text-slate-700 sm:text-base">
            <p>
              Poor Women Support Organization (PWSO) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with us.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Information We Collect</h3>
            <p>
              We may collect personal information you voluntarily provide, including your name, email address, phone number, and donation details when you fill out forms, make donations, or contact us.
            </p>

            <h3 className="text-lg font-bold text-slate-900">How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide information about our programs</li>
              <li>To process donations and provide receipts</li>
              <li>To send updates about our work (with your consent)</li>
              <li>To improve our website and services</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900">Data Protection</h3>
            <p>
              We implement appropriate security measures to protect your personal information. We do not sell, trade, or share your information with third parties except as required by law or with your explicit consent.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Cookies</h3>
            <p>
              Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h3 className="text-lg font-bold text-slate-900">Contact</h3>
            <p>
              If you have questions about this policy, please contact us at{" "}
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

export default Privacy;
