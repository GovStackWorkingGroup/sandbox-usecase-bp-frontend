import { Status } from "../components/status/ApplicationStatus";

export interface Candidate {
  id: number;
  person: string;
  packages: string;
}

export interface Application {
  id: string;
  status: Status;
}
