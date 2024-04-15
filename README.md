# Auto Web Typescript Playwright

You're on the right track with Playwright! It lets you write automation tests in TypeScript for both web apps and APIs. In this project, we'll focus on web apps.

Playwright makes it easy to control the browser: you can navigate to pages, click buttons, fill forms, and check for results. It also lets you take screenshots if needed.

Remember, Playwright works for APIs too, so you can test how your web app interacts with them.

Ready to dive in? There are great resources to help you get started, including Playwright's official docs and tutorials. You can even find video demonstrations online.

Feel free to ask if you get stuck along the way!

## Prerequisite

To use Playwright tool, we need to install the Nodejs. We can download and install the latest LTS version of nodejs right [here](https://nodejs.org/en/download/current).

## Execute the test scenarios

That's exactly right! You've outlined the essential steps for setting up your Playwright project:

**Installation**: Begin by running `npm install` in your project directory. This installs all the necessary dependencies listed in your package.json file.

**Browser Setup**: Once the project is set up, use `npx playwright install` to download the supported browsers you want to run your tests on. Playwright supports Chromium, Firefox, and WebKit engines.

**Test Execution**: Finally, with everything in place, you can execute your Playwright tests using `npx playwright test`. This command searches for test files with specific naming conventions (usually ending in .spec.ts for TypeScript) and runs them across the installed browsers.

Now you're ready to start writing your automation test scripts using Playwright and TypeScript!

## Configure the test execution

If you want to execute test more efficiently, you can make the script run in parallel and able to execute on cross browsers.

**Cross browsers execution**: Playwright offers a flexible way to configure your tests for multiple browsers using the playwright.config.ts file.  This file lets you define projects, each specifying a browser (Chrome, Firefox, WebKit) to use with the use property. You can even customize projects further by targeting specific browser channels or running them in headless mode. This configuration gives you control over which browsers your tests run on, ensuring broader test coverage.

``` js
projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
  ```

**Parallelization**: Absolutely! Playwright excels at running tests in parallel, which can significantly speed up your automation execution. Here's how you can leverage this feature:

- Test File Structure: Playwright encourages structuring your test files in a way that promotes parallelization. This usually involves keeping each test case or user story within its own test file.

- Workers: Playwright uses the concept of workers to distribute tests across multiple processes or threads. You can configure the number of worker processes using the workers property in your playwright.config.ts file.  Playwright will then distribute your tests evenly among these workers, running them concurrently.

- Benefits: By running tests in parallel, you can significantly reduce the overall test execution time. This becomes especially beneficial as your test suite grows larger.

Here's an example configuration snippet for using multiple worker processes:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 4, // Adjust this number as needed
  // ... other configurations
});
```

Remember, the optimal number of workers depends on your system resources and the nature of your tests.  If your tests involve heavy browser interactions, using too many workers might overload your system.  Playwright provides a good balance between speed and resource utilization by default, but you can fine-tune it based on your project's requirements.
Be aware of your script, some scenarios can affect each other and may return failing results. For that thing, you should make it run in sequence to make sure everything is running correctly.

## CI/CD Integration
//TODO
