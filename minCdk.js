#!/usr/bin/env node

// Import necessary CDK modules using ES6 import syntax
import { App, Stack, Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

// Define a new construct class
class MinCdkConstruct extends Construct {
  /**
   * Initialize a new construct
   * @param {Construct} scope - The scope in which this construct is defined
   * @param {string} id - The scoped construct ID
   * @param {StackProps=} props - Construct properties
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // Define an SQS queue resource
    const queue = new Queue(this, "MinCdkQueue", {
      visibilityTimeout: Duration.seconds(300),
    });
  }
}

// Define a stack that uses the construct
class MinCdkStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new MinCdkConstruct(this, "MinCdkConstruct");
  }
}

// Initialize the CDK app
const app = new App();

// Instantiate the stack
new MinCdkStack(app, "MinCdkStack", {
  // Uncomment and configure the environment for deployment
  // env: { account: '123456789012', region: 'us-east-1' },
});

// Export the app instance for reuse
export { app, MinCdkStack };
