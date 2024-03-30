#!/usr/bin/env node

// This script is used to update the package.json file with the build reference and build date from the build process.

import fs from 'fs';
import process from 'process';

const buildRef = process.argv[2];
const buildDate = process.argv[3];
const buildVersion = process.argv[4];

if (!buildRef || !buildDate || !buildVersion) {
    console.log('Please provide a build reference, build date and build version');
    process.exit(1);
}

fs.readFile('./package.json', (err, data) => {
    if (err) throw err;

    let packageJsonObj = JSON.parse(data.toString());
    packageJsonObj.buildRef = `${buildRef}`;
    packageJsonObj.buildDate = `${buildDate}`;
    packageJsonObj.version = `${buildVersion}`;
    packageJsonObj = JSON.stringify(packageJsonObj);

    fs.writeFile('./package.json', packageJsonObj, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
