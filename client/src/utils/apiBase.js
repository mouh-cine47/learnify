export function getApiBaseUrl() {
  const configuredUrl = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '');

  if (import.meta.env.PROD) {
    if (!configuredUrl || /localhost|127\.0\.0\.1/.test(configuredUrl)) {
      return '/api';
    }
  }

  return configuredUrl || '/api';
}