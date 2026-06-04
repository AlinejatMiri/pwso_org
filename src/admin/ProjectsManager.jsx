import { useState, useEffect } from "react";
import { adminFetchProjects, adminCreateProject, adminUpdateProject, adminDeleteProject } from "../api";
import ImageUploader from "./ImageUploader";

const emptyForm = { slug: "", title: "", category: "", imageUrl: "", shortDesc: "", description: "", impact: "", fullDescription: "" };

function ProjectsManager() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function load() {
    setLoading(true);
    setError("");
    adminFetchProjects()
      .then(setItems)
      .catch((err) => setError("Failed to load: " + err.message))
      .finally(() => setLoading(false));
  }
  useEffect(load, []);

  function openCreate() { setEditId(null); setForm(emptyForm); setShowForm(true); }

  function openEdit(item) {
    setEditId(item._id);
    setForm({ slug: item.slug, title: item.title, category: item.category || "", imageUrl: item.imageUrl || "", shortDesc: item.shortDesc || "", description: item.description || "", impact: item.impact || "", fullDescription: item.fullDescription || "" });
    setShowForm(true);
  }

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) { await adminUpdateProject(editId, form); }
      else { await adminCreateProject(form); }
      setShowForm(false); load();
    } catch (err) { alert(err.message); }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this project?")) return;
    try { await adminDeleteProject(id); load(); } catch (err) { alert(err.message); }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Projects</h1>
        <button onClick={openCreate} className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition w-full sm:w-auto">+ New Project</button>
      </div>

      {loading && <div className="bg-blue-50 text-blue-700 rounded-xl px-5 py-3 text-sm mb-4">Loading projects...</div>}

      {error && (
        <div className="bg-red-50 text-red-700 rounded-xl px-5 py-3 text-sm mb-4">
          <p className="font-semibold">Error</p>
          <p>{error}</p>
          <button onClick={load} className="mt-2 text-red-600 underline">Retry</button>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-0 sm:pt-10 pb-0 sm:pb-10 overflow-y-auto" onClick={() => setShowForm(false)}>
          <div className="bg-white shadow-xl w-full max-w-2xl sm:mx-4 sm:rounded-2xl min-h-screen sm:min-h-0 p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">{editId ? "Edit Project" : "New Project"}</h2>
              <button onClick={() => setShowForm(false)} className="sm:hidden text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input name="slug" value={form.slug} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input name="title" value={form.title} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input name="category" value={form.category} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Impact</label>
                  <input name="impact" value={form.impact} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
                </div>
              </div>
              <ImageUploader onUploaded={(url) => setForm({ ...form, imageUrl: url })} />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                <textarea name="shortDesc" value={form.shortDesc} onChange={handleChange} rows={2} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
                <textarea name="fullDescription" value={form.fullDescription} onChange={handleChange} rows={4} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="px-5 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition">{editId ? "Update" : "Create"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm hidden sm:table">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-5 py-3 font-semibold text-gray-600">Title</th>
                  <th className="px-5 py-3 font-semibold text-gray-600">Category</th>
                  <th className="px-5 py-3 font-semibold text-gray-600">Slug</th>
                  <th className="px-5 py-3 font-semibold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-medium text-slate-900">{item.title}</td>
                    <td className="px-5 py-4 text-gray-500">{item.category}</td>
                    <td className="px-5 py-4 text-gray-500 font-mono text-xs">{item.slug}</td>
                    <td className="px-5 py-4 text-right">
                      <button onClick={() => openEdit(item)} className="text-sky-600 hover:text-sky-800 font-medium mr-3">Edit</button>
                      <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700 font-medium">Delete</button>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && <tr><td colSpan={4} className="px-5 py-8 text-center text-gray-400">No projects yet</td></tr>}
              </tbody>
            </table>
            <div className="sm:hidden divide-y divide-gray-100">
              {items.map((item) => (
                <div key={item._id} className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => openEdit(item)} className="text-xs text-sky-600 hover:text-sky-800 font-medium">Edit</button>
                      <button onClick={() => handleDelete(item._id)} className="text-xs text-red-500 hover:text-red-700 font-medium">Delete</button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 font-mono">{item.slug}</p>
                </div>
              ))}
              {items.length === 0 && <p className="text-center text-gray-400 py-8">No projects yet</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsManager;
