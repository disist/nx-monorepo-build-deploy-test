const coverageFolder = './coverage/apps/';
const fs = require('fs');

['coverage-summary.json', 'coverage-final.json'].forEach((coverageFile) => {
  let agregatedCoverage = {};
  fs.readdirSync(coverageFolder).forEach((appName) => {
    const appCoverage = require(`${coverageFolder}${appName}/${coverageFile}`);
    agregatedCoverage = { ...agregatedCoverage, ...appCoverage };
  });

  // console.log(JSON.stringify(agregatedCoverage, null, 2));
  fs.writeFileSync(
    `./coverage/${coverageFile}`,
    JSON.stringify(agregatedCoverage)
  );
});
