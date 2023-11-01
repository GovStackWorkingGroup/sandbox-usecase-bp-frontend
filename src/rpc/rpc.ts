import { createContext } from "react";
import RPCProviderFactory from "./RPCProviderFactory";

export default class RPC {
  RPCProviderFactory: RPCProviderFactory = new RPCProviderFactory();

  getApplications = () =>
    this.RPCProviderFactory.getProvider("getApplications").getApplications();

  getData = (key: string) =>
    this.RPCProviderFactory.getProvider("getData").getData(key);

  setData = (key: string, value: string) =>
    this.RPCProviderFactory.getProvider("setData").setData(key, value);

  forseSetData = (key:string, value: string) =>
    this.RPCProviderFactory.getProvider("forseSetData").forceSetData(key, value);

  invalidateSession = () =>
    this.RPCProviderFactory.getProvider("invalidateSession").invalidateSession();

  getToken = (username: string, password: string) =>
    this.RPCProviderFactory.getProvider("getToken").getToken(username, password);

  registerUser = (name: string, username: string, password: string) =>
    this.RPCProviderFactory.getProvider("registerUser").registerUser(name, username, password);

}

export const RPCContext = createContext(new RPC());
