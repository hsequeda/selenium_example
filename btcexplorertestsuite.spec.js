// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('btc_explorer_test_suite', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    const chromeOptions = new Options();
    chromeOptions.addArguments(["no-sandbox", "--disable-extensions", "--headless"])
    driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('search_tx_ce21de39c966cbcd57156211d0d1ebd209f3450de4db1fd6d019f8abb26fea38', async function() {
    // Test name: search_tx_ce21de39c966cbcd57156211d0d1ebd209f3450de4db1fd6d019f8abb26fea38
    // Step # | name | target | value
    // 1 | open | https://www.blockchain.com/explorer?view=btc |
    await driver.get("https://www.blockchain.com/explorer?view=btc")
    // 2 | setWindowSize | 956x968 |
    await driver.manage().window().setRect({ width: 956, height: 968 })
    // 3 | click | css=.s0dncj-4 > .sc-1c3roxu-1 |
    await driver.findElement(By.css(".s0dncj-4 > .sc-1c3roxu-1")).click()
    // 4 | runScript | window.scrollTo(0,0) |
    await driver.executeScript("window.scrollTo(0,0)")
    // 5 | type | css=.s0dncj-4 > .sc-1c3roxu-1 | ce21de39c966cbcd57156211d0d1ebd209f3450de4db1fd6d019f8abb26fea38
    await driver.findElement(By.css(".s0dncj-4 > .sc-1c3roxu-1")).sendKeys("ce21de39c966cbcd57156211d0d1ebd209f3450de4db1fd6d019f8abb26fea38")
    // 6 | sendKeys | css=.s0dncj-4 > .sc-1c3roxu-1 | ${KEY_ENTER}
    await driver.findElement(By.css(".s0dncj-4 > .sc-1c3roxu-1")).sendKeys(Key.ENTER)
    // 7 | click | css=.kad8ah-4 > .odi4cq-0:nth-child(1) |
    await driver.findElement(By.css(".kad8ah-4 > .odi4cq-0:nth-child(1)")).click()
    // 8 | assertText | css=.kad8ah-1 > .sc-1ryi78w-0 | 0.00002934 BTC
    // Verify Tx Fee
    assert(await driver.findElement(By.css(".kad8ah-1 > .sc-1ryi78w-0")).getText() == "0.00002934 BTC")
    // 9 | runScript | window.scrollTo(0,583) |
    await driver.executeScript("window.scrollTo(0,583)")
    // 10 | click | css=.sc-1enh6xt-0:nth-child(2) |
    await driver.findElement(By.css(".sc-1enh6xt-0:nth-child(2)")).click()
    // 11 | assertText | css=div:nth-child(1) > .sc-45ldg2-0 | Confirmed
    // Verify Tx status
    assert(await driver.findElement(By.css("div:nth-child(1) > .sc-45ldg2-0")).getText() == "Confirmed")
    // 12 | click | css=.sc-1mp2xeh-0 > .sc-1fp9csv-0:nth-child(2) > .sc-1xo2hia-0:nth-child(2) > .gVJWcr |
    await driver.findElement(By.css(".sc-1mp2xeh-0 > .sc-1fp9csv-0:nth-child(2) > .sc-1xo2hia-0:nth-child(2) > .gVJWcr")).click()
    // 13 | assertText | css=.sc-1mp2xeh-0 > .sc-1fp9csv-0:nth-child(2) .sc-1tbyx6t-0 > .sc-1r996ns-0 | bc1q8n4nqa3mssmtyujty7wn5xuzn0eh0lm38eqedn
    // Verify Tx first input
    assert(await driver.findElement(By.css(".sc-1mp2xeh-0 > .sc-1fp9csv-0:nth-child(2) .sc-1tbyx6t-0 > .sc-1r996ns-0")).getText() == "bc1q8n4nqa3mssmtyujty7wn5xuzn0eh0lm38eqedn")
    // 14 | click | css=.sc-1567cm0-0 .sc-1xo2hia-0:nth-child(2) > .gVJWcr |
    await driver.findElement(By.css(".sc-1567cm0-0 .sc-1xo2hia-0:nth-child(2) > .gVJWcr")).click()
    // 15 | assertText | css=.sc-1567cm0-0 .sc-1r996ns-0 | 38rvwGHUhrzdNe51RtRox1JsoiadcAKmZL
    // Verify Tx first output
    assert(await driver.findElement(By.css(".sc-1567cm0-0 .sc-1r996ns-0")).getText() == "38rvwGHUhrzdNe51RtRox1JsoiadcAKmZL")
  })
})
