import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { fetchBlogPosts } from "../api";
import { FaCalendarDays } from "react-icons/fa6";

const categoryColors = {
  Education: "bg-blue-500",
  Health: "bg-green-500",
  Empowerment: "bg-purple-500",
  Humanitarian: "bg-orange-500",
  Research: "bg-teal-500",
  Agriculture: "bg-yellow-600",
};

function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then(setArticles)
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
      <Seo title="News & Updates" description="Latest news from Poor Women Support Organization (PWSO) in Afghanistan." path="/blog" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            News & Updates
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Stories from the field
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Stay informed about PWSO&apos;s latest programs, milestones, and the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article._id || article.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${categoryColors[article.category] || "bg-sky-600"}`}>
                  {article.category}
                </span>
              </div>
              <div className="px-6 py-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                  <FaCalendarDays />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
