export enum Scope {
  ROLE_PAYMENT_OFFICER = "ROLE_PAYMENT_OFFICER",
  ROLE_ENROLLMENT_OFFICER = "ROLE_ENROLLMENT_OFFICER",
  ROLE_REGISTRY_ADMINISTRATION = "ROLE_REGISTRY_ADMINISTRATION",
}

export interface Token {
  scope: Scope;
}

export const getToken = () => {
  const token = sessionStorage.getItem("driver-token");
  if (token) {
    return token;
  }
  return null;
};

export const getRole = () => {
  const token = getToken();
  if (token) {
    const payload = token.split(".")[1];
    return (JSON.parse(atob(payload)) as Token).scope;
  }
  return null;
};
