const iotSimCardPage = require('../pageobjects/iot-sim-card.page');
const Elements = require('../pageobjects/elements');
describe('Telnyx what will you build journey(part2)', () => {
    beforeEach(async()=>{
        await iotSimCardPage.open();
    });
    
    it('check Abra is keeping industrial drilling', async () => {
        await Elements.clickButtonCloseModal()
        await iotSimCardPage.clickLinkIndustrialIoT()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card/industrial-iot')
        await expect(Elements.title).toHaveTextContaining('Revolutionize manufacturing processes')
    });
    it('check Valor combines wireless data with', async () => {
        //await Elements.clickButtonCloseModal()
        await iotSimCardPage.clickLinkPointOfSaleIoT()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card/point-of-sale')
        await expect(Elements.title).toHaveTextContaining('Global Connectivity for Point of Sale Devices')
    });
    it('check JLS provides peace of mind to', async () => {
        await iotSimCardPage.clickLinkFleetManagement()
        await expect(browser).toHaveUrlContaining('/products/iot-sim-card/fleet-management-iot')
        await expect(Elements.title).toHaveTextContaining('IoT fleet management with end-to-end')
    });
    
});

