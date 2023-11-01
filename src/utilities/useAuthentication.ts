import { useContext } from "react";
import { RPCContext } from "../rpc/rpc";
import { useNavigate } from "react-router-dom";
import { getToken } from "./token";

export const useAuthentication = () => {
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    try {
        const token = await rpc.getToken(username, password);
        sessionStorage.setItem("token", token);
        navigate("/");
    } catch (e) {
        window.location.replace(`/login`);
    }
  };

  const logout = () => {
    rpc.invalidateSession().then(() => {
      sessionStorage.removeItem("token");
      navigate("/")
    });
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  return { login, isAuthenticated, logout } as const;
}
