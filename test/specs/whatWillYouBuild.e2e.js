const iotSimCardPage = require('../pageobjects/iot-sim-card.page');
const Elements = require('../pageobjects/elements');
describe('Telnyx what will you build journey', () => {
    beforeEach(async()=>{
        await iotSimCardPage.open();
    });
    it('check Colectivo empowers delivery', async () => {
        await Elements.clickButtonCloseModal()
        await iotSimCardPage.clickLinkTelnyxWirelessPoint()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card/point-of-sale')
        await expect(Elements.title).toHaveTextContaining('Global Connectivity for Point')
    });
    it('check Clair Global provides connectivity', async () => {
        await iotSimCardPage.clickLinkCustomerStory()
        await expect(browser).toHaveUrlContaining('/landing/case-study-clair-global')
        await expect(Elements.title).toHaveTextContaining('Clair Global and Telnyx')
    });
    it('check Flowaste helps businesses reduce', async () => {
        await iotSimCardPage.clickLinkSustainability()
        await expect(browser).toHaveUrlContaining('/resources/iot-sustainability-solutions')
        await expect(iotSimCardPage.articleTitle).toHaveTextContaining('IoT for Sustainability')
    });    
});

