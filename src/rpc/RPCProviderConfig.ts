import APIProvider from "./APIProvider";
import BaseProvider from "./BaseProvider";
import MockProvider from "./MockProvider";
import StorageProvider from "./StorageProvider/StorageProvider";

export default class RPCProviderConfig {
  providers = {
    MOCK: new MockProvider(),
    API: new APIProvider(),
    STORAGE: new StorageProvider(),
  };
  map: Record<string, BaseProvider> = {
    getCandidateList: this.providers.MOCK,
    createCandidate: this.providers.MOCK,
    updateCandidate: this.providers.MOCK,
    deleteCandidate: this.providers.MOCK,
  };
  addProvider = (key: string, provider: BaseProvider) => {
    this.providers = { ...this.providers, [key]: provider };
  };
  getProvider = (method: string) => {
    return this.map[method];
  };
}
