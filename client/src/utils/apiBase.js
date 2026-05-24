export function getApiBaseUrl() {
  // Use the Netlify proxy in production so the frontend makes same-origin requests
  if (import.meta.env.PROD) return '/api';

  // In development, allow overriding via VITE_API_URL; otherwise fallback to /api
  return (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
}