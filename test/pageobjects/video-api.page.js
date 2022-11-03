const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class VideoAPIPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get buttonGetStarted(){
        return $('a*=Get started')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */

    async clickButtonGetStarted(){
        this.buttonGetStarted.click()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products/voice-api');
    }
}

module.exports = new VideoAPIPage();
