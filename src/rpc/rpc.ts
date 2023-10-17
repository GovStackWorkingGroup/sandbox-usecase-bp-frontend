import { createContext } from "react";
import RPCProviderFactory from "./RPCProviderFactory";

export default class RPC {
  RPCProviderFactory: RPCProviderFactory = new RPCProviderFactory();
  getCandidateList = () =>
    this.RPCProviderFactory.getProvider("getCandidateList").getCandidateList();

  createCandidate = () =>
    this.RPCProviderFactory.getProvider("createCandidate").createCandidate();

  updateCandidate = () =>
    this.RPCProviderFactory.getProvider("updateCandidate").updateCandidate();

  deleteCandidate = () =>
    this.RPCProviderFactory.getProvider("deleteCandidate").deleteCandidate();
}

export const RPCContext = createContext(new RPC());
