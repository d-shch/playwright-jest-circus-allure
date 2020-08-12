const expect = require("expect-playwright")

beforeEach(async () => {
  context = await global.browser.newContext()
  page = await context.newPage()
  global.page = page
})

afterEach(async () => {
  page.close()
})

test("Test passed with tms link", async () => {
  /**
  * @issue https://github.com/d-shch/playwright-jest-circus-allure/issues/1
  */
  
   await page.goto('https://github.com/d-shch/playwright-jest-circus-allure/issues/1')
   await expect(page).toHaveText('.js-issue-title', 'Test issue')
})

test("Test failed with attach screenshot", async () => {
   await page.goto('https://github.com/d-shch/playwright-jest-circus-allure/issues/1')
   await expect(page).toHaveText('.js-issue-title', 'Fail')
})
