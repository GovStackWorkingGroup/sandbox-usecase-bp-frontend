# CI CD

## Build image & Deployment
Build image process of creating image and installing Construction Permit UC Front End in EKS cluster

### CI environment variables
| Variable              | Description                                     | Value                                                 |
| :---------------------| :-----------------------------------------------| :-----------------------------------------------------|
| AWS_CLUSTER_NAME      | The AWS cluster that is used in the CI pipeline | Govstack-sandbox-cluster-dev                          |
| AWS_DEFAULT_REGION    | AWS Cluster region                              | eu-central-1                                          |
| NAMESPACE             | K8S namespace where the chart will be installed | bp                                                    |

## Trigger pipeline
To run follow those steps:

    1. Navigate to project in CircleCI
    2. Select branch from the dropdown
    3. Select "Trigger pipeline" action
    4. Add parameter of type "Boolean", named "deploy_allowed" and set value to "true"
    6. Then trigger "deploy-frontend" pipeline
    7. Approve the first CI Job (Approve "Hold" job) 