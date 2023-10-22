import { Status } from "../components/status/ApplicationStatus";
import BaseProvider from "./BaseProvider";
import { Application } from "./types";

const localStorageVariable = "No such variable in mock storage";

const ongoingApplications: Application[] = [
  {
    id: "547896",
    status: Status.IN_REVIEW,
  },
  {
    id: "006598",
    status: Status.IN_REVIEW,
  },
  {
    id: "987654",
    status: Status.ACTION_NEEDED,
  },
  {
    id: "396543",
    status: Status.DRAFT,
  },
];

export default class MockProvider extends BaseProvider {
  getCandidateList() {
    return new Promise<Application[]>((resolve) =>
      setTimeout(() => {
        resolve(ongoingApplications);
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
