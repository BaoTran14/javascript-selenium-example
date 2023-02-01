const { Builder, By, Key, WebDriver } = require("selenium-webdriver")
const Environment = require("../environment_config/environment")
require("chromedriver")
require("geckodriver")
require("edgedriver")
// const edge = require('selenium-webdriver/edge');
const environment = new Environment();

class DriverUtils {
    constructor(){
        this.driver;
    }

    async initBrowser() {
        switch (environment.test_browser) {
            case "chrome":
                this.driver = await new Builder().forBrowser("chrome").build();
                break;
            case "firefox":
                this.driver = await new Builder().forBrowser("firefox").build();
                break;
            case "edge":
                // var service = new edge.ServiceBuilder()
                // .setPort(55555)
                // .build();
                // //configure browser options ...
                // var options = new edge.Options();
                // this.driver = edge.Driver.createSession(options, service);
                this.driver = await new Builder().forBrowser("MicrosoftEdge").build();
                break;
            default:
                this.driver = await new Builder().forBrowser("chrome").build();
                break;
        }
        await this.driver.manage().window().maximize();
        return this.driver;
    }
    async quitBrowser(driver) {
        (await driver).quit();
    }

    async navigateToUrl(driver, url) {
        await (await driver).get(url);
    }

    async refreshPage(driver){
        await (await driver).navigate().refresh();
        console.log("Page refreshed")
    }

}
module.exports = DriverUtils;