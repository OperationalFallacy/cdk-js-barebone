#!/usr/bin/env node

/**
 * This script lists all the AWS CDK stacks defined in the current project.
 * It imports the existing app from min-cdk.js, synthesizes it, and prints
 * the names of all stacks.
 */

import { app } from './minCdk.js';

// Synthesize the app to get the stacks
const assembly = app.synth();

// List the stack names
console.log('CDK stacks:');
assembly.stacks.forEach(stack => {
    console.log(`- ${stack.stackName}`);
});
