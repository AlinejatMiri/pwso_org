import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProjects, fetchBlogPosts, fetchFAQs, fetchTeamMembers, fetchPartners } from "../api";
import { adminFetchMessages } from "../api";

function Dashboard() {
  const [counts, setCounts] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError("");
    Promise.all([
      fetchProjects().then((d) => ({ key: "projects", value: d.length })),
      fetchBlogPosts().then((d) => ({ key: "blog", value: d.length })),
      fetchFAQs().then((d) => ({ key: "faqs", value: d.length })),
      fetchTeamMembers().then((d) => ({ key: "team", value: d.length })),
      fetchPartners().then((d) => ({ key: "partners", value: d.length })),
      adminFetchMessages().then((d) => ({ key: "messages", value: d.length })),
    ])
      .then((results) => {
        const obj = {};
        results.forEach((r) => { obj[r.key] = r.value; });
        setCounts(obj);
      })
      .catch((err) => setError("Failed to connect to backend: " + err.message))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: "Projects", count: counts.projects ?? "-", color: "bg-blue-500", to: "/admin/projects" },
    { label: "Blog Posts", count: counts.blog ?? "-", color: "bg-green-500", to: "/admin/blog" },
    { label: "FAQs", count: counts.faqs ?? "-", color: "bg-purple-500", to: "/admin/faqs" },
    { label: "Team Members", count: counts.team ?? "-", color: "bg-amber-500", to: "/admin/team" },
    { label: "Partners", count: counts.partners ?? "-", color: "bg-teal-500", to: "/admin/partners" },
    { label: "Messages", count: counts.messages ?? "-", color: "bg-rose-500", to: "/admin/messages" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Dashboard</h1>

      {loading && (
        <div className="bg-blue-50 text-blue-700 rounded-xl px-5 py-3 text-sm mb-6">Loading data...</div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 rounded-xl px-5 py-3 text-sm mb-6">
          <p className="font-semibold mb-1">Connection Error</p>
          <p>{error}</p>
          <p className="mt-2 text-xs">Make sure the backend server is running on port 3000 and MongoDB is connected.</p>
        </div>
      )}

      {!error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link key={card.label} to={card.to} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">{card.count}</p>
                </div>
                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center text-white text-xl font-bold`}>
                  {card.count}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/admin/projects" className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition">Manage Projects</Link>
          <Link to="/admin/blog" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition">Manage Blog</Link>
          <Link to="/admin/messages" className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium hover:bg-rose-700 transition">View Messages</Link>
          <Link to="/admin/team" className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition">Manage Team</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
