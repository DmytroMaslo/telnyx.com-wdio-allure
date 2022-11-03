const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class VoiceAPIPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get buttonSignUpAndStartBuilding(){
        return $('a*=Sign up')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */

    async clickButtonSignUpAndStartBuilding(){
        this.buttonSignUpAndStartBuilding.click()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products/voice-api');
    }
}

module.exports = new VoiceAPIPage();
