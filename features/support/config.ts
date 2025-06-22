export const config = {
  baseUrl: 'https://www.bing.com',
  timeout: 15000,
  headless: process.env.HEADLESS !== 'false',
  slowMo: parseInt(process.env.SLOW_MO || '0'),
};