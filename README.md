**Example how to use allure-report with playwright**

In this example you can see how to use allure-report with playwright and how to attach screenshots to report if test fail or handle other test events.

Use circus for bind test events: https://www.npmjs.com/package/jest-circus
Allure for circus: https://github.com/ryparker/jest-circus-allure-environment

Setup dependencies:
```
npm install
```

Run tests:
```
npm run test
```

Open Allure report (allure must install locally https://docs.qameta.io/allure/#_installing_a_commandline):
```
allure serve
```