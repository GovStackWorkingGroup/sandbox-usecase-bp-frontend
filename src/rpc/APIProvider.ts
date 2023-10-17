import BaseProvider from "./BaseProvider";

export default class APIProvider extends BaseProvider {
  async getCandidateList() {
    return new Promise<string>((resolve) =>
      resolve("Successfully fetched from api"));
    // try {
    // const req = await fetch(
    //   `/api/v1/candidates`, {
    //     method: "GET",
    //     credentials: "include"
    //   }
    // );
    // return req.json() as Promise<Candidate[]>;
    // } catch (error) {
    //   return [];
    // }
  }

  async createCandidate() {
    return new Promise<string>((resolve) =>
      resolve("Successfully created in api"));

    // const message = "Successfully created in api";
    // // const req = await fetch(
    // //   `/api/v1/candidates`,
    // //   {
    // //     method: "POST",
    // //     body: JSON.stringify(candidate),
    // //     headers: {
    // //       "Content-Type": "application/json",
    // //     },
    // //     credentials: "include"
    // //   },
    // // );
    // return req.json() as Promise<Candidate>;
  }

  async updateCandidate() {
    return new Promise<string>((resolve) =>
      resolve("Successfully updated in api"));
    // const req = await fetch(
    //   `/api/v1/candidates/${
    //     candidate.person.id
    //   }`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(candidate),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "include"
    //   },
    // );
    // return req.json() as Promise<Candidate>;
  }

  async deleteCandidate() {
    return new Promise<string>((resolve) =>
      resolve("Successfully deleted from api"));

    //   const req = await fetch(
    //     `/api/v1/candidates/${id}`,
    //     {
    //       method: "DELETE",
    //       credentials: "include"
    //     },
    //   );
    //   return req.json() as Promise<string>;
    // }
  }
}
