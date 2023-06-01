const coverageFolder = './coverage/apps/';
const fs = require('fs');

let agregatedCoverage = {};
fs.readdirSync(coverageFolder).forEach((appName) => {
  const appCoverage = require(`${coverageFolder}${appName}/coverage-summary.json`);
  agregatedCoverage = { ...agregatedCoverage, ...appCoverage };
});

// console.log(JSON.stringify(agregatedCoverage, null, 2));
fs.writeFileSync(
  './coverage/coverage-summary.json',
  JSON.stringify(agregatedCoverage)
);
