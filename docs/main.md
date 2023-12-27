
# Construction Permit Use Case Front End

The Construction Permit Use Case Front End Demo outlines the implementation of an automated construction permit service that streamlines the entire permit approval process - from online application submissions to final approval by local government authorities.

This digital solution addresses issues with traditional "over the counter" and paper-based permit management, aiming for transparency, accountability, and efficiency in ensuring safe and compliant construction practices.

The construction permit application can be done by the property owner, lead architect or engineer or the principal contractor providing the necessary information and documents. After providing everything needed and submitting the applicant can follow the process of approval and take additional actions that might occur during the approval process. Actions can be such as:

 - Upload additionally required documents;
 - Schedule Inspection;

 The citizen will get notified when their application's status changes - a certain action is needed, the inspection date is approaching or when their application was approved/rejected!

 [Live Demo](http://bp.playground.sandbox-playground.com)

 ## Technologies used

Project is bootstrapped with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Chakra-UI](https://chakra-ui.com/)

For an explanation on why these tools were chosen, read about the [Component Library Evaluation](https://govstack-global.atlassian.net/wiki/spaces/DEMO/pages/96043009/Component+Library+Evaluation) and [Frontend framework](https://govstack-global.atlassian.net/wiki/spaces/DEMO/pages/95912054/Frontend+Framework)

## Installation

Use `npm install` to install dependencies.

```bash

npm  install

```
Then build the project

```bash

npm run build

```

## The RPC Layer
The RPC Layer is based on the [Facade Pattern](https://en.wikipedia.org/wiki/Facade_pattern). In short, we are using it as a configurable API layer for the full-stack Construction Permit demo. It allows us granular control over our API call method endpoints from one location, which is good for demonstrating connectivity between different interchangeable Building Blocks and Back End services.

The RPC layer can be configured for different providers such as:
- [Mock Provider](./../src/rpc/MockProvider.ts)
- [API Provider](./../src/rpc/APIProvider.ts)
- [Local Storage Provider](./../src/rpc/StorageProvider/StorageProvider.ts)

Those providers extend the [Base Provider](./../src/rpc/BaseProvider.ts) that is used as main definition of the RPC call methods.

The Front End uses [RPC Backend](https://github.com/GovStackWorkingGroup/sandbox-app-rpc-backend) acting like a generic remote storage provider and can be used for multiple applications simultaneously one of which currently is the Construction Permit Use Case.
This type of Backend suggests having all the business logic implemented in the Front End part and using the Backend as a place to save and retrieve data.





