import { Application } from "./types";

export default abstract class BaseProvider {
  abstract getApplications(): Promise<Application[]>;
  abstract getData(key: string): Promise<string>;
  abstract setData(key: string, value: string): Promise<string>;
  abstract forceSetData(key: string, value: string): Promise<string>;
  abstract invalidateSession(): Promise<string>;
  abstract getToken(username: string, password: string): Promise<string>;
  abstract registerUser(name: string, username: string, password: string): Promise<string>;
}
