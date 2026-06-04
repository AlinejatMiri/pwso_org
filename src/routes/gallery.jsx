import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { fetchGalleryImages } from "../api";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages()
      .then(setImages)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500 text-lg">Loading...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <Seo title="Gallery" description="Photos from PWSO programs and initiatives across Afghanistan." path="/gallery" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            Gallery
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Moments that matter
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            A glimpse into our programs, the communities we serve, and the impact we create together.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((item, index) => (
            <div
              key={item._id || index}
              className="group relative mb-4 overflow-hidden rounded-2xl break-inside-avoid shadow-sm ring-1 ring-slate-200"
            >
              <img
                src={item.imageUrl}
                alt={item.caption || ""}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.caption && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
