function getApiBase() {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'http://localhost:3000/api';
  }
  return '/api';
}

const API_BASE = getApiBase();

async function handleResponse(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'Request failed');
  }
  return res.json();
}

export const fetchProjects = () =>
  fetch(`${API_BASE}/projects`).then(handleResponse);

export const fetchProjectBySlug = (slug) =>
  fetch(`${API_BASE}/projects/${slug}`).then(handleResponse);

export const fetchBlogPosts = () =>
  fetch(`${API_BASE}/blog`).then(handleResponse);

export const fetchGalleryImages = () =>
  fetch(`${API_BASE}/gallery`).then(handleResponse);

export const fetchFAQs = () =>
  fetch(`${API_BASE}/faqs`).then(handleResponse);

export const fetchPartners = () =>
  fetch(`${API_BASE}/partners`).then(handleResponse);

export const fetchTeamMembers = () =>
  fetch(`${API_BASE}/team`).then(handleResponse);

export const submitContact = (data) =>
  fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);

function adminFetch(path, options = {}) {
  return fetch(`${API_BASE}/admin${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  }).then(handleResponse);
}

export const adminLogin = (username, password) =>
  fetch(`${API_BASE}/admin/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }).then(handleResponse);

export const adminFetchProjects = () => adminFetch('/projects');
export const adminCreateProject = (data) => adminFetch('/projects', { method: 'POST', body: JSON.stringify(data) });
export const adminUpdateProject = (id, data) => adminFetch(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeleteProject = (id) => adminFetch(`/projects/${id}`, { method: 'DELETE' });

export const adminFetchBlog = () => adminFetch('/blog');
export const adminCreateBlog = (data) => adminFetch('/blog', { method: 'POST', body: JSON.stringify(data) });
export const adminUpdateBlog = (id, data) => adminFetch(`/blog/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeleteBlog = (id) => adminFetch(`/blog/${id}`, { method: 'DELETE' });

export const adminFetchGallery = () => adminFetch('/gallery');
export const adminCreateGallery = (data) => adminFetch('/gallery', { method: 'POST', body: JSON.stringify(data) });
export const adminUpdateGallery = (id, data) => adminFetch(`/gallery/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeleteGallery = (id) => adminFetch(`/gallery/${id}`, { method: 'DELETE' });

export const adminFetchFaqs = () => adminFetch('/faqs');
export const adminCreateFaq = (data) => adminFetch('/faqs', { method: 'POST', body: JSON.stringify(data) });
export const adminUpdateFaq = (id, data) => adminFetch(`/faqs/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeleteFaq = (id) => adminFetch(`/faqs/${id}`, { method: 'DELETE' });

export const adminFetchPartners = () => adminFetch('/partners');
export const adminCreatePartner = (data) => adminFetch('/partners', { method: 'POST', body: JSON.stringify(data) });
export const adminUpdatePartner = (id, data) => adminFetch(`/partners/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeletePartner = (id) => adminFetch(`/partners/${id}`, { method: 'DELETE' });

export const adminFetchTeam = () => adminFetch('/team');
export const adminCreateTeam = (data) => adminFetch('/team', { method: 'POST', body: JSON.stringify(data) });
export const adminUpdateTeam = (id, data) => adminFetch(`/team/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeleteTeam = (id) => adminFetch(`/team/${id}`, { method: 'DELETE' });

export const adminFetchMessages = () => adminFetch('/contact');
export const adminUpdateMessage = (id, data) => adminFetch(`/contact/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const adminDeleteMessage = (id) => adminFetch(`/contact/${id}`, { method: 'DELETE' });

export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append('image', file);
  return fetch(`${API_BASE}/upload`, { method: 'POST', body: formData }).then(handleResponse);
};
