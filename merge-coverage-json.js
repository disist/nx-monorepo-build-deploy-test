const fs = require('fs');
const { exec } = require('child_process');
const coverageFolder = './coverage/apps/';

const appNames = fs.readdirSync(coverageFolder);

['coverage-summary.json', 'coverage-final.json'].forEach((coverageFile) => {
  let agregatedCoverage = {};
  appNames.forEach((appName) => {
    const appCoverage = require(`${coverageFolder}${appName}/${coverageFile}`);
    agregatedCoverage = { ...agregatedCoverage, ...appCoverage };
  });

  console.log('>> saving', `./coverage/${coverageFile}`);
  fs.writeFileSync(
    `./coverage/${coverageFile}`,
    JSON.stringify(agregatedCoverage)
  );
});

const testCoverageJsonFiles = appNames.map((appName) => {
  return `${appName}, ${coverageFolder}${appName}/coverage-summary.json`;
});

console.log('>> ', JSON.stringify(testCoverageJsonFiles));

exec(
  `echo "testCoverageJsonFiles=${JSON.stringify(
    testCoverageJsonFiles
  )}" >> $GITHUB_ENV`
);
