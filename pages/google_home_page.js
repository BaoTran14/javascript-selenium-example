const { By } = require("selenium-webdriver");
const BasePage = require("./base_page");
var basePage = new BasePage();

const gmailLabel = By.xpath("//*[text()='Gmail']");

class GoogleHomePage extends BasePage {

    async getGmailLabel(driver) {
        return await this.getText(driver, gmailLabel);
    }
}
module.exports = GoogleHomePage;