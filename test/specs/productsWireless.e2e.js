const MainPage = require('../pageobjects/main.page');
const Elements = require('../pageobjects/elements');
const iotSimCardPage = require('../pageobjects/iot-sim-card.page');
describe('Telnyx product journey', () => {
    beforeEach(async()=>{
        await MainPage.open();
    });
   
    it('check Wireless product(explore Point)', async () => {
        await Elements.clickButtonCloseModal()
        await MainPage.clickProductWireless()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card')
        await expect(Elements.title).toHaveTextContaining('IoT SIM Cards for')
        await iotSimCardPage.clickLinkExplorePoint()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card/point-of-sale')
        await expect(Elements.title).toHaveTextContaining('Global Connectivity for Point of Sale Devices')
    });
    it('check Wireless product( 588 carriers )', async () => {
        await MainPage.clickProductWireless()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card')
        await expect(Elements.title).toHaveTextContaining('IoT SIM Cards for')
        await iotSimCardPage.clickLinkSIMConnects()
        await expect(browser).toHaveUrlContaining('international-roaming-partners')
        await expect(Elements.articleTitle).toHaveTextContaining('Wireless International Roaming')
    });
    it('check Wireless product(cost-saving standby mode)', async () => {
        await MainPage.clickProductWireless()
        await iotSimCardPage.clickLinkCostSaving()
        await expect(browser).toHaveUrlContaining('/release-notes/usage-based-activation')
        await expect(Elements.title).toHaveTextContaining('Telnyx SIM Usage Based Activation')
    });
    it('check Wireless product(alerting)', async () => {
        await MainPage.clickProductWireless()
        await iotSimCardPage.clickLinkAlerting()
        await expect(browser).toHaveUrlContaining('/release-notes/sim-card-status-change-notifications')
        await expect(Elements.title).toHaveTextContaining('SIM Card Status Change')
    });
    it('check Wireless product(live reports)', async () => {
        
        await MainPage.clickProductWireless()
        await iotSimCardPage.clickLinkLiveReports()
        await expect(browser).toHaveUrlContaining('programmable-wireless-reporting-and-analytics')
        await expect(Elements.articleTitle).toHaveTextContaining('Programmable Wireless Reporting')
    });
    it('check Wireless product(public or private IP)', async () => {
        await Elements.clickButtonCloseModal()
        await MainPage.clickProductWireless()
        await iotSimCardPage.clickLinkPublicOrPrivate()
        await expect(browser).toHaveUrlContaining('/resources/telnyx-public-ips')
        await expect(iotSimCardPage.articleTitle).toHaveTextContaining('Map your public IoT')
    });
    it('check Wireless product(over-the-air SIM)', async () => {

        await MainPage.clickProductWireless()
        await iotSimCardPage.clickLinkOverTheAir()
        await expect(browser).toHaveUrlContaining('wireless/ota-updates')
        await expect(Elements.title).toHaveTextContaining('Network Preferences')
    });
    it('check Wireless product(over-the-air SIM)', async () => {
       //await Elements.clickButtonCloseModal()
        await MainPage.clickProductWireless()
        await iotSimCardPage.clickLinkOverTheAir()
        await expect(browser).toHaveUrlContaining('wireless/ota-updates')
        await expect(Elements.title).toHaveTextContaining('Network Preferences')
    });

});


