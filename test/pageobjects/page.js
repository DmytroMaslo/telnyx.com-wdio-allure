const { default: $ } = require("webdriverio/build/commands/browser/$")

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://telnyx.com${path}`)
    }

    get buttonCloseModal(){
        return $("button[aria-label='close and deny']")
    }
    
    get title () {
        return $('main h1');
    }

    async clickButtonCloseModal(){
        await this.buttonCloseModal.click()
    }
}
