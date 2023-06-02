const fs = require('fs');
const coverageFolder = './coverage/apps/';

const appNames = fs.readdirSync(coverageFolder);

appNames.forEach((coverageFile) => {
  let agregatedCoverage = {};
  fs.readdirSync(coverageFolder).forEach((appName) => {
    const appCoverage = require(`${coverageFolder}${appName}/${coverageFile}`);
    agregatedCoverage = { ...agregatedCoverage, ...appCoverage };
    appNames.push(appName);
  });

  console.log('>> saving', `./coverage/${coverageFile}`);
  fs.writeFileSync(
    `./coverage/${coverageFile}`,
    JSON.stringify(agregatedCoverage)
  );
});

process.env.testCoverageJsonFiles = appNames.reduce((result, appName) => {
  return `${result}\n${appName}, ${coverageFolder}${appName}/coverage-summary.json`;
}, '|');

console.log('>> ', process.env.testCoverageJsonFiles);
