#!/usr/bin/env node

import { app } from './minCdk.js';
import * as yaml from 'js-yaml';

try {
    const assembly = app.synth();

    console.log('CDK stacks and their synthesized YAML templates:');
    assembly.stacks.forEach(stack => {
        console.log(`\nStack: ${stack.stackName}`);

        const templateJson = stack.template;
        const templateYaml = yaml.dump(templateJson);

        console.log(templateYaml);
        if (!process.env.CDK_OUTDIR) {
            console.info('CDK_OUTDIR is not set, the app will use temp location, with final output in the cdk.out directory\n');
        }
        console.log('Stack properties:');
        console.log(`- Stack Name: ${stack.stackName}`);
        console.log(`- Assembly out dir: ${app.outdir}`);
        console.log(`- Assembly assets dir: ${app.assetOutdir}`);
        console.log(`- Template File: ${stack.templateFile}`);
        console.log(`- Dependencies: ${stack.dependencies.map(dep => dep.id).join(', ')}`);
    });
} catch (error) {
    console.error('Error during synthesis:', error);
}
