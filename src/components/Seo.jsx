import { useEffect } from "react";

const BASE_URL = "https://pwso.org";
const DEFAULT_DESC =
  "Poor Women Support Organization (PWSO) — Empowering Afghan women and communities through education, health, and economic development programs.";

export default function Seo({
  title,
  description = DEFAULT_DESC,
  image = "/og-image.png",
  path = "",
}) {
  useEffect(() => {
    document.title = title ? `${title} | PWSO` : "PWSO – Poor Women Support Organization";
  }, [title]);

  useEffect(() => {
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setMeta("description", description);
    setMeta("og:title", title ? `${title} | PWSO` : "PWSO");
    setMeta("og:description", description);
    setMeta("og:url", `${BASE_URL}${path}`);
    setMeta("og:image", `${BASE_URL}${image}`);
    setMeta("twitter:card", "summary_large_image");
    setLink("canonical", `${BASE_URL}${path}`);
  }, [title, description, image, path]);

  return null;
}
