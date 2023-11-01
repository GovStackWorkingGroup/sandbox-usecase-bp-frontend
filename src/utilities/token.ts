export interface Token {}

export const getToken = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};
