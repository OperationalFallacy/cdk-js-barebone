# AWS CDK JavaScript Project

This project is a basic example of the AWS Cloud Development Kit (CDK) with JavaScript. It shows how to define cloud infrastructure using code and deploy it with the AWS CDK.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) (version 2.x or later)
- AWS account and credentials configured

## Project Structure

- `min-cdk.js`: The entry point of the CDK application, which defines the Cloudformaiton stack and resources.
- `cdk.json`: Configuration file for the CDK CLI. This is an entry point for the CDK application.

## Useful Commands

- `cdk list`: List the stacks in the app.
- `npm install`: Install the project dependencies.
- `cdk synth`: Synthesize the CloudFormation template.
- `cdk deploy`: Deploy the stack to your default AWS account/region.
- `cdk diff`: Compare the deployed stack with the current state.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Deploy the stack**:

   ```bash
   cdk deploy --profile <your-profile-name>
   ```

4. **Clean up resources**:

   After you finish experimenting, delete the resources to avoid incurring charges:

   ```bash
   cdk destroy --profile <your-profile-name>
   ```
