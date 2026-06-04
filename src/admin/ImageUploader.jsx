import { useState, useRef } from "react";
import { uploadImage } from "../api";

function ImageUploader({ onUploaded }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [url, setUrl] = useState("");
  const fileRef = useRef(null);

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setUploading(true);
    try {
      const res = await uploadImage(file);
      setUrl(res.url);
      if (onUploaded) onUploaded(res.url);
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  }

  function handleUrlInput(e) {
    setUrl(e.target.value);
    setPreview(null);
    if (onUploaded) onUploaded(e.target.value);
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Image</label>
      <div className="flex gap-3 items-start">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <input type="file" ref={fileRef} onChange={handleFile} accept="image/*" className="text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" />
            {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Or paste URL:</span>
            <input type="text" value={url} onChange={handleUrlInput} placeholder="https://..." className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-sky-500" />
          </div>
        </div>
        {preview && (
          <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 shrink-0">
            <img src={preview} alt="preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
      {url && !preview && (
        <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
          <img src={url} alt="preview" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
