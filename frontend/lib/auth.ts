const TOKEN_KEY = "admin_access_token";

export function saveAdminToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getAdminToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeAdminToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAdminAuthenticated() {
  return Boolean(getAdminToken());
}