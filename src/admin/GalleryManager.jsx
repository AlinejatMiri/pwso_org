import { useState, useEffect } from "react";
import { adminFetchGallery, adminCreateGallery, adminUpdateGallery, adminDeleteGallery } from "../api";
import ImageUploader from "./ImageUploader";

const emptyForm = { imageUrl: "", caption: "", sortOrder: 0 };

function GalleryManager() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function load() {
    setLoading(true);
    setError("");
    adminFetchGallery()
      .then(setItems)
      .catch((err) => setError("Failed to load: " + err.message))
      .finally(() => setLoading(false));
  }
  useEffect(load, []);

  function openCreate() { setEditId(null); setForm(emptyForm); setShowForm(true); }

  function openEdit(item) {
    setEditId(item._id);
    setForm({ imageUrl: item.imageUrl || "", caption: item.caption || "", sortOrder: item.sortOrder || 0 });
    setShowForm(true);
  }

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) { await adminUpdateGallery(editId, form); }
      else { await adminCreateGallery(form); }
      setShowForm(false); load();
    } catch (err) { alert(err.message); }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this image?")) return;
    try { await adminDeleteGallery(id); load(); } catch (err) { alert(err.message); }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Gallery</h1>
        <button onClick={openCreate} className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition w-full sm:w-auto">+ Add Image</button>
      </div>

      {loading && <div className="bg-blue-50 text-blue-700 rounded-xl px-5 py-3 text-sm mb-4">Loading gallery...</div>}

      {error && (
        <div className="bg-red-50 text-red-700 rounded-xl px-5 py-3 text-sm mb-4">
          <p className="font-semibold">Error</p>
          <p>{error}</p>
          <button onClick={load} className="mt-2 text-red-600 underline">Retry</button>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-0 sm:pt-10 pb-0 sm:pb-10 overflow-y-auto" onClick={() => setShowForm(false)}>
          <div className="bg-white shadow-xl w-full max-w-lg sm:mx-4 sm:rounded-2xl min-h-screen sm:min-h-0 p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">{editId ? "Edit Image" : "Add Image"}</h2>
              <button onClick={() => setShowForm(false)} className="sm:hidden text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <ImageUploader onUploaded={(url) => setForm({ ...form, imageUrl: url })} />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
                <input name="caption" value={form.caption} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                <input type="number" name="sortOrder" value={form.sortOrder} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="px-5 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition">{editId ? "Update" : "Add"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden group">
              <div className="h-32 sm:h-40 overflow-hidden">
                <img src={item.imageUrl} alt={item.caption || ""} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500 truncate">{item.caption || "No caption"}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => openEdit(item)} className="text-xs text-sky-600 hover:text-sky-800 font-medium">Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="text-xs text-red-500 hover:text-red-700 font-medium">Delete</button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="col-span-full text-center text-gray-400 py-8">No images yet</p>}
        </div>
      )}
    </div>
  );
}

export default GalleryManager;
