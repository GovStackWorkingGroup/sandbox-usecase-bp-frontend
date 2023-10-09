export interface Token {}

export const login = () => {
  localStorage.setItem("token", "true");
  window.location.href = "/";
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};
