#!/usr/bin/env node

import { App, Stack, Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

// Define a new construct, a building block where we create AWS resources.
class MinCdkConstruct extends Construct {
  /**
   * Construct properties
   * @param {Construct} scope - The scope in which this construct is defined
   * @param {string} id - Construct ID
   * @param {StackProps=} props - Construct properties
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new Queue(this, "MinCdkQueue", {});
  }
}

// Create a new stack - Cloudformation.
// It will contain resources defined in the Construct
class MinCdkStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new MinCdkConstruct(this, "MinCdkConstruct");
  }
}

// Initialize the "root" Construct.
// It will represents whole CDK application as a container with all resources
const app = new App();

// Create MinCdkStack instance to load defined AWS resources into the CDK app
new MinCdkStack(app, "MinCdkStack", {
  // env: { account: '123456789012', region: 'us-east-1' },
});

// Export the app instance and stack to reuse in the scripts
export { app, MinCdkStack };
