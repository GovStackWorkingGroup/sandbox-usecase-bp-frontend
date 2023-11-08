import BaseProvider from "./BaseProvider";
import StorageProvider from "./StorageProvider/StorageProvider";
import { Application } from "./types";

export default class APIProvider extends BaseProvider {
  storageProvider = new StorageProvider();

  async getApplications() {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/rpc-data/data`,
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify({
          "tenant": "building-permit",
          "key": "applications"
        }),
      },
    );
    const applications = JSON.parse(await req.text()).value;
    return JSON.parse(applications) as Promise<Application[]>
  }

  async getData(key: string) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/rpc-data/data`,
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify({
          "tenant": "building-permit",
          "key": key
        })
      },
    );
    return req.json() as Promise<string>;
  }

  async setData(key: string, value: string) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/rpc-data/data`,
      {
        method: "PUT",
        headers: {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify({
          "tenant": "building-permit",
          "key": key,
          "value": value
        })
      },
    );
    if (req.ok) return req.json() as Promise<string>;
    else throw req.status
  }

  async forceSetData(key: string, value: string) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/rpc-data/data`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify({
          "tenant": "building-permit",
          "key": key,
          "value": value
        })
      },
    );
    return req.json() as Promise<string>;
  }

  async invalidateSession () {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/rpc-data/session?tenant=building-permit`,
      {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
      },
    );
    return req.text() as Promise<string>;
  }

  async getToken(username: string, password: string) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/auth/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        }),
      },
    );
    if (req.status == 403) {
      throw "loginRequired"
    } else {
      return req.text() as Promise<string>;
    }
  }

  async registerUser(name: string, username: string, password: string) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/auth/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "name": name,
          "username": username,
          "password": password
        }),
      },
    );
    return req.json() as Promise<string>;
  }
}