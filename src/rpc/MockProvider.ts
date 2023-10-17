
import BaseProvider from "./BaseProvider";
import ObjectToTree from "./StorageProvider/objectToTree";

const localStorageVariable = "No such variable in mock storage";

export default class MockProvider extends BaseProvider {
  getCandidateList() {
    return new Promise<string>((resolve) =>
      setTimeout(() => {
        resolve("Successfully parsed from mock");
      }, 1000),
    );
  }

  createCandidate() {
    return new Promise<string>((resolve) => {
      resolve("Successfully created in mock");
    });
  }

  updateCandidate() {
    return new Promise<string>((resolve) => {
      resolve("Successfully updated in mock");
    });
  }

  deleteCandidate() {
    return new Promise<string>((resolve) => {
      resolve("Successfully deleted from mock");
    });
  }

  getMockItem(key: string): Promise<string> {
    // const objectToTree = new ObjectToTree();
    return new Promise<string>((resolve) => {
      // if (key == "candidates") resolve(JSON.stringify(objectToTree.decompose(this.candidateList)));
      // else if (key == "packages") resolve(JSON.stringify(objectToTree.decompose(this.packagesList)));
      // else resolve(JSON.stringify(localStorageVariable));
      resolve(localStorageVariable);
    });
  }
}
