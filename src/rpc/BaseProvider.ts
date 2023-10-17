export default abstract class BaseProvider {
  abstract getCandidateList(): Promise<string>;
  abstract createCandidate(): Promise<string>;
  abstract updateCandidate(): Promise<string>;
  abstract deleteCandidate(): Promise<string>;
}
