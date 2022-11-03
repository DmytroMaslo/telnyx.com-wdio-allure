const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Elements extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonCloseModal(){
        return $("button[aria-label='close and deny']")
    }
    
    get title () {
        return $('main h1');
    }
    
    get linkPSTN (){
        return $('header + div  span a')
    }
    get articleTitle(){
        return $('.content h1')
    }

    async clickButtonCloseModal(){
        await this.buttonCloseModal.click()
    }
    async clickLinkPSTN(){
        await this.linkPSTN.click()
    }
}

module.exports = new Elements();
