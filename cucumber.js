module.exports = {
  default: {
    format: [
      'json:reports/cucumber-report.json',
      'progress-bar',
      '@cucumber/pretty-formatter'
    ],
    require: [
      'features/step-definitions/*.ts',
      'support/*.ts'
    ],
    requireModule: ['ts-node/register'],
    worldParameters: {
      headless: process.env.HEADLESS !== 'false'
    }
  }
}