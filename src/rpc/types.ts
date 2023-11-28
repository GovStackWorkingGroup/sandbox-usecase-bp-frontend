import { Status } from "../components/status/ApplicationStatus";
import {
  ROLE,
  RoleData,
} from "../features/construction-permit/application/identification/Identification";

export interface Application {
  id: string;
  status: Status;
  parcelID: string;
  identification: { role: ROLE; data: RoleData }[];
  action: "paymentRequired" | string;
  documents: {
    name: string;
    progress?: number;
    url?: string;
  }[];
  pendingDocuments: {
    name: string;
    extensions: string;
  }[];
}

export interface RecentActivity {
  name: string,
  path: string
}
