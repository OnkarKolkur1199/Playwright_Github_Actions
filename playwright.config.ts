import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  // workers: process.env.CI ? 1 : undefined,
  workers:  1 ,
  // reporter: [['list'], ['html', { open: 'never' }]],
  // reporter: 'html',
  reporter: [['html', { open: 'never'}],
              ['github'],
              // ['list'],
              // ['line'],
              // ['dot'],
              // ['junit',{outputFile: 'result.xml'}],
              // ['json',{outputFile: 'result.json'}],
              // ['allure-playwright'],
              // ['./my-custom-reporter.ts']
              ],

  // retries : 3, 

  use: {
    headless: true,
    trace: 'retain-on-failure',
    // screenshot: 'only-on-failure',
    // screenshot: 'on',
    // video: 'retain-on-failure',
    // baseURL: 'https://example.com',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // fullyParallel: true,
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});
