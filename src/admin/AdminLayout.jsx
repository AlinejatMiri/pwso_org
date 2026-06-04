import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaChartPie, FaFolder, FaNewspaper, FaImages, FaCircleQuestion,
  FaHandshake, FaUsers, FaEnvelope, FaArrowRightFromBracket, FaBars, FaXmark, FaHouse
} from "react-icons/fa6";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: FaChartPie },
  { to: "/admin/projects", label: "Projects", icon: FaFolder },
  { to: "/admin/blog", label: "Blog Posts", icon: FaNewspaper },
  { to: "/admin/gallery", label: "Gallery", icon: FaImages },
    { to: "/admin/faqs", label: "FAQs", icon: FaCircleQuestion },
  { to: "/admin/partners", label: "Partners", icon: FaHandshake },
  { to: "/admin/team", label: "Team", icon: FaUsers },
  { to: "/admin/messages", label: "Messages", icon: FaEnvelope },
];

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("admin_user");
    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`} onClick={() => setSidebarOpen(false)} />
      <aside className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <Link to="/admin" className="text-lg font-bold">PWSO Admin</Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/70 hover:text-white">
            <FaXmark />
          </button>
        </div>
        <nav className="mt-4 px-3 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${active ? "bg-sky-600 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
              >
                <item.icon className="text-lg" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-4 border-t border-white/10 space-y-1">
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition">
            <FaHouse className="text-lg" /> View Website
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-red-500/20 hover:text-red-400 transition w-full">
            <FaArrowRightFromBracket className="text-lg" /> Logout
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between lg:justify-end">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600 text-xl">
            <FaBars />
          </button>
          <p className="text-sm text-gray-500">Welcome, {localStorage.getItem("admin_user") || "Admin"}</p>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
