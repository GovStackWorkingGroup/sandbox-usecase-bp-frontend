import { Status } from "../components/status/ApplicationStatus";
import BaseProvider from "./BaseProvider";
import ObjectToTree from "./StorageProvider/objectToTree";
import { Application } from "./types";

const localStorageVariable = "No such variable in mock storage";

const applications = [
    {
      id: "000326",
      status: Status.APPROVED,
      action: "",
      parcelID: "AB-1234",
      identification: [],
      documents: [],
      pendingDocuments: []
    },
    {
      id: "007266",
      status: Status.APPROVED,
      action: "",
      parcelID: "AB-2222",
      identification: [],
      documents: [],
      pendingDocuments: []
    },
    {
      id: "000983",
      status: Status.REJECTED,
      action: "",
      parcelID: "AB-1111",
      identification: [],
      documents: [],
      pendingDocuments: []
    },
    {
      id: "003324",
      status: Status.REJECTED,
      action: "",
      parcelID: "AB-3333",
      identification: [],
      documents: [],
      pendingDocuments: []
    },
    {
      id: "132513",
      status: Status.IN_REVIEW,
      action: "",
      parcelID: "AB-1441",
      identification: [],
      documents: [],
      pendingDocuments: []
    },
    {
      id: "006598",
      status: Status.IN_REVIEW,
      action: "",
      parcelID: "AB-1123",
      identification: [],
      documents: [],
      pendingDocuments: []
    },
    {
      id: "987654",
      status: Status.ACTION_NEEDED,
      action: "",
      parcelID: "AB-1314",
      identification: [],
      documents: [],
      pendingDocuments: [
        {
          name: "Environmental Impact Assessment Report",
          extensions: ".pdf"
        },
        {
          name: "Utilities and Infrastructure Plans",
          extensions: ".dwg, .dxf, .dgn, .rfa, .pln"
        }
      ]
    },
    {
      id: "396543",
      status: Status.DRAFT,
      action: "",
      parcelID: "AB-1211",
      identification: [],
      documents: [],
      pendingDocuments: []
    }
  ];

const objectToTree = new ObjectToTree();

export default class MockProvider extends BaseProvider {

  async getApplications() {
    return new Promise<Application[]>((resolve) => {
      console.log(JSON.stringify(applications));
      resolve(applications);
    });
  }

  async getData() {
    return "";
  }

  async setData() {
    return "";
  }

  async forceSetData() {
    return "";
  }

  async invalidateSession() {
    return "";
  }

  async getToken() {
    return "";
  }

  async registerUser() {
    return "";
  }

  getMockItem(key: string): Promise<string> {
    // const objectToTree = new ObjectToTree();
    return new Promise<string>((resolve) => {
      if (key == "applications") resolve(JSON.stringify(objectToTree.decompose(applications)));
      // else if (key == "packages") resolve(JSON.stringify(objectToTree.decompose(this.packagesList)));
      // else resolve(JSON.stringify(localStorageVariable));
      else resolve(localStorageVariable);
    });
  }
}
