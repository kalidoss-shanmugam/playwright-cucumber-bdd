const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": process.env.CI ? "CI" : "Local"
  }
};

reporter.generate(options);