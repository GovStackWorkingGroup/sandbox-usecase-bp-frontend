import BaseProvider from '../BaseProvider';
import MockProvider from '../MockProvider';
import ObjectToTree from './objectToTree';

export default class StorageProvider extends BaseProvider {
  objectToTree = new ObjectToTree();
  mockProvider = new MockProvider();

  getCandidateList() {
    return new Promise<string>((resolve) =>
      resolve("Successfully fetched from storage"));
    // return new Promise <string> ((resolve) =>
    //     setTimeout(async () => {
    //         const result = await this.getLocalStorageObject("candidates") as Promise<string>;
    //         resolve(result);
    //     }, 1000)
    // );
  }

  createCandidate() {
    return new Promise<string>((resolve) =>
      resolve("Successfully created in storage"));
  }

  updateCandidate() {
    return new Promise<string>((resolve) => {
      resolve("Successfully updated in storage");
    });
  }

  deleteCandidate() {
    return new Promise<string>((resolve) => {
      resolve("Successfully deleted from storage");
    });
  }

  getLocalStorageItem(key: string) {
    return new Promise<string>(async (resolve) => {
      var item = localStorage.getItem(key);
      if (!item) {
        item = await this.mockProvider.getMockItem(key);
        this.setLocalStorageItem(key, item);
      }
      resolve(item);
    })
  };

  setLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getLocalStorageObject(key: string) {
    return new Promise<object>(async (resolve) => {
      var item = await this.getLocalStorageItem(key);
      resolve(this.objectToTree.compose(JSON.parse(item)));
    })
  };

  setLocalStorageObject(key: string, object: object) {
    localStorage.setItem(key, JSON.stringify(this.objectToTree.decompose(object)));
  }

  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
    return new Promise<string>((resolve) => {
      resolve("Removed " + key);
    });
  }
}
