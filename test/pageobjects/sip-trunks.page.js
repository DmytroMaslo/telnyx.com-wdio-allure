const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SipTrunksPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get buttonTalkToAnExpert(){
        return $('main h1 + div + div a')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */

    async clickButtonTalkToAnExpert(){
        await this.buttonTalkToAnExpert.waitForClickable({ timeout: 3000 })
        await this.buttonTalkToAnExpert.click()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products/voice-api');
    }
}

module.exports = new SipTrunksPage();
