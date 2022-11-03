const MainPage = require('../pageobjects/main.page');
const Elements = require('../pageobjects/elements');
const SMSAPIPage = require('../pageobjects/sms-api.page');

describe('Telnyx product journey', () => {
    beforeEach(async()=>{
        await MainPage.open();
    });
    it('check Messaging API product(twexit-api)', async () => {
        await Elements.clickButtonCloseModal()
        await MainPage.clickProductMessagingAPI()
        await expect(browser).toHaveUrlContaining('/products/sms-api')
        await expect(Elements.title).toHaveTextContaining('SMS API')
        await SMSAPIPage.clickLinkTwexitAPI()
        await expect(browser).toHaveUrlContaining('twexit-api')
        await expect(Elements.title).toHaveTextContaining('Switch To Telnyx with your existing')
    });
    it('check Messaging API product(Verify API)', async () => {
        await MainPage.clickProductMessagingAPI()
        await expect(browser).toHaveUrlContaining('/products/sms-api')
        await expect(Elements.title).toHaveTextContaining('SMS API')
        await SMSAPIPage.clickLinkVerifyAPI()
        await expect(browser).toHaveUrlContaining('/products/verify-api')
        await expect(Elements.title).toHaveTextContaining('Verify API: User authentication made easy')
    });
   
});


