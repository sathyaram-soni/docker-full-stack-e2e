exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      // url: "http://localhost:8081/",
      url: "http://host.docker.internal:8081/",
      show: false,
      chrome: {
        // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
        // https://peter.sh/experiments/chromium-command-line-switches/
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },
  },
  include: {
    I: "./tests/steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "e2e tests",
  plugins: {
    allure: {
      enabled: true,
      outputDir: "./testReports/allure-reports",
    },
  },
};
