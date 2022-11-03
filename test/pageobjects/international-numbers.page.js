const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class InternationalNumbersPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get linkPSTN (){
        return $('header + div  span a')
    }
    get linkLocalAndNational(){
        return $('main div li:nth-child(1) a p + p')
    }
    get linkTollFreeNumbers(){
        return $('main div li:nth-child(2) a p + p')
    }
    get linkFastPort(){
        return $('main div li:nth-child(3) a p + p')
    }
    get title(){
        return $('main>div:first-child header h2')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */
    async clickLinkPSTN(){
        await this.linkPSTN.click()
    }
    async clickLinkLocalAndNational(){
        await this.linkLocalAndNational.click()
    }
    async clickLinkTollFreeNumbers(){
        await this.linkTollFreeNumbers.click()
    }
    async clickLinkFastPort(){
        await this.linkFastPort.click()
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products/voice-api');
    }
}

module.exports = new InternationalNumbersPage();
