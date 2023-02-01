const { Builder, By, Key, WebDriver, until} = require("selenium-webdriver");
const timeout = 5000;
class BasePage{
    async getText(webdriver, locator){
        var value = await (await webdriver).wait(until.elementLocated(locator), timeout).getText();
        return value;
    }
}
module.exports = BasePage;