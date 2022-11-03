const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SMSAPIPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get linkTwexitAPI(){
        return $('ul li:first-child a div p + p')
    }
    get linkVerifyAPI(){
        return $('ul li:nth-child(2) a div p + p')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */

    async clickLinkTwexitAPI(){
        await this.linkTwexitAPI.click()
    }
    async clickLinkVerifyAPI(){
        await this.linkVerifyAPI.click()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products/voice-api');
    }
}

module.exports = new SMSAPIPage();
