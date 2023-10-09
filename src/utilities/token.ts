export interface Token {}

export const login = () => {
  sessionStorage.setItem("token", "true");
  window.location.href = "/";
};

export const logout = () => {
  sessionStorage.removeItem("token");
  window.location.href = "/";
};

export const getToken = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};
