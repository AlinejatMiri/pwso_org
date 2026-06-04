import { useState, useEffect } from "react";
import { adminFetchMessages, adminUpdateMessage, adminDeleteMessage } from "../api";
import { FaArrowLeft } from "react-icons/fa6";

function MessagesManager() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function load() {
    setLoading(true);
    setError("");
    adminFetchMessages()
      .then(setItems)
      .catch((err) => setError("Failed to load: " + err.message))
      .finally(() => setLoading(false));
  }
  useEffect(load, []);

  function selectMessage(item) {
    setSelected(item);
    setShowDetail(true);
  }

  function backToList() {
    setShowDetail(false);
  }

  async function toggleRead(item) {
    try {
      await adminUpdateMessage(item._id, { isRead: !item.isRead });
      load();
    } catch (err) { alert(err.message); }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this message?")) return;
    try { await adminDeleteMessage(id); setSelected(null); setShowDetail(false); load(); } catch (err) { alert(err.message); }
  }

  if (loading) return <div className="bg-blue-50 text-blue-700 rounded-xl px-5 py-3 text-sm">Loading messages...</div>;

  if (error) return (
    <div className="bg-red-50 text-red-700 rounded-xl px-5 py-3 text-sm">
      <p className="font-semibold">Error</p>
      <p>{error}</p>
      <button onClick={load} className="mt-2 text-red-600 underline">Retry</button>
    </div>
  );

  const listPanel = (
    <div className="w-full lg:max-w-md bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-lg font-bold text-slate-900">Messages ({items.length})</h1>
      </div>
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {items.map((item) => (
          <button key={item._id} onClick={() => selectMessage(item)} className={`w-full text-left p-4 hover:bg-gray-50 transition ${selected?._id === item._id ? "bg-sky-50" : ""}`}>
            <div className="flex items-center justify-between">
              <span className={`font-medium text-sm ${!item.isRead ? "text-slate-900" : "text-gray-500"}`}>{item.name}</span>
              {!item.isRead && <span className="w-2 h-2 bg-sky-500 rounded-full" />}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">{item.subject || "No subject"}</p>
            <p className="text-xs text-gray-400 mt-0.5">{new Date(item.createdAt).toLocaleDateString()}</p>
          </button>
        ))}
        {items.length === 0 && <p className="text-center text-gray-400 py-8">No messages</p>}
      </div>
    </div>
  );

  const detailPanel = selected ? (
    <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 overflow-y-auto">
      <button onClick={backToList} className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-800 font-medium mb-4 lg:hidden">
        <FaArrowLeft /> Back to Messages
      </button>
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{selected.subject || "No Subject"}</h2>
          <p className="text-sm text-gray-500 mt-1">From: {selected.name} ({selected.email})</p>
          {selected.phone && <p className="text-sm text-gray-500">Phone: {selected.phone}</p>}
          <p className="text-xs text-gray-400 mt-1">{new Date(selected.createdAt).toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => toggleRead(selected)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${selected.isRead ? "bg-gray-100 text-gray-600 hover:bg-gray-200" : "bg-sky-100 text-sky-700 hover:bg-sky-200"}`}>
            {selected.isRead ? "Mark Unread" : "Mark Read"}
          </button>
          <button onClick={() => handleDelete(selected._id)} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition">Delete</button>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-700 leading-7 whitespace-pre-wrap">{selected.message}</p>
      </div>
    </div>
  ) : (
    <div className="hidden lg:flex flex-1 items-center justify-center bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 text-gray-400">
      <p>Select a message to view</p>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[calc(100vh-12rem)]">
      <div className={showDetail ? "hidden lg:flex lg:w-auto" : "flex lg:w-auto"}>
        {listPanel}
      </div>
      <div className={showDetail ? "flex flex-1" : "hidden lg:flex lg:flex-1"}>
        {detailPanel}
      </div>
    </div>
  );
}

export default MessagesManager;
