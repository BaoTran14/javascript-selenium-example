const chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const assert = require("assert");
const DriverUtils = require("../driverUtils/driver_utils");
const GoogleHomePage = require("../pages/google_home_page");
const Environment = require("../environment_config/environment");
const userOnGoogleHomePage = new GoogleHomePage();
const environment = new Environment();

var driverUtils = new DriverUtils();;
var driver;

describe("Google Home Page Test 1", function(){

    before(()=>{
        environment.set_up();
    })

    beforeEach(async ()=>{
        access_google_home_page();
    })

    describe("the gmail label should be Gmail", function(){
        it("check gmail label", async function(){
            var label = await userOnGoogleHomePage.getGmailLabel(driver);
            //assert using chai expect
            expect(label).to.equal("Gmail");
            //assert using chai should
            label.should.equal("Gmail");
            //assert using nodejs assert
            assert.strictEqual(label, "Gmail");
        })
    })

    describe("the page should be refreshed", ()=>{
        it("check refresh page", async ()=>{
            var label = await userOnGoogleHomePage.getGmailLabel(driver);
            //assert using chai expect
            expect(label).to.equal("Gmail");
            //assert using chai should
            label.should.equal("Gmail");
            //assert using nodejs assert
            assert.strictEqual(label, "Gmail");
        })
    })

    afterEach(async ()=>{
        quit_aut();
    })
})

async function access_google_home_page(){
    driver = driverUtils.initBrowser();
    driverUtils.navigateToUrl(driver, environment.data.url);
}

function quit_aut(){
    driverUtils.quitBrowser(driver);
}

async function example(){
    console.log("Test example")
}

async function example1(){
    console.log("Test example 1")
}
module.exports = {example, example1};