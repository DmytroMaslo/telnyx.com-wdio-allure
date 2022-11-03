const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productVoiceAPI () {
        return $('li:nth-child(1) a div p + p');
    }
    get productElasticSIPTrunking () {
        return $('li:nth-child(2) a div p + p');
    }
    get productMessagingAPI () {
        return $('li:nth-child(3) a div p + p');
    }
    get productInternationalNumbers () {
        return $('li:nth-child(4) a div p + p');
    }
    get productVideoAPI () {
        return $('li:nth-child(5) a div p + p');
    }
    get productWireless () {
        return $('li:nth-child(6) a div p + p');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */
    async clickProductVoiceAPI(){
        await this.productVoiceAPI.click()
    }
    async clickProductElasticSIPTrunking(){
        await this.productElasticSIPTrunking.click()
    }
    async clickProductMessagingAPI(){
        await this.productMessagingAPI.click()
    }
    async clickProductInternationalNumbers(){
        await this.productInternationalNumbers.click()
    }
    async clickProductVideoAPI(){
        await this.productVideoAPI.click()
    }
    async clickProductWireless(){
        await this.productWireless.click()
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new MainPage();
