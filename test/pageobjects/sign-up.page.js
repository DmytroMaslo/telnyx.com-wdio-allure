const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/sign-up');
    }
}

module.exports = new SignUpPage();
