import { Status } from "../components/status/ApplicationStatus";

export interface Identification {
  id?: string,
  name: string,
  email?: string,
  phoneNumber?: string,
  role: string
}

export interface Application {
  id: string;
  status: Status;
  parcelID: string;
  identification: Identification[];
  documents: {
    name: string
  }[];
  pendingDocuments:
    {
      name: string,
      extensions: string
    }[];
}
