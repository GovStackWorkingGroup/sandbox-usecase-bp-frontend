import { Application } from "./types";

export default abstract class BaseProvider {
  abstract getCandidateList(): Promise<Application[]>;
  abstract createCandidate(): Promise<string>;
  abstract updateCandidate(): Promise<string>;
  abstract deleteCandidate(): Promise<string>;
}
