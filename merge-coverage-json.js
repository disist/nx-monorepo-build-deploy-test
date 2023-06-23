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

const testCoverageJsonFiles = appNames
  .map((appName) => {
    return `${appName}, ${coverageFolder}${appName}/coverage-summary.json`;
  })
  .join('\n');

console.log('>> ', testCoverageJsonFiles);

exec(`echo "testCoverageJsonFiles<<EOF" >> $GITHUB_ENV`);
exec(`echo "${testCoverageJsonFiles}" >> $GITHUB_ENV`);
exec(`echo "EOF" >> $GITHUB_ENV`);
