const MainPage = require('../pageobjects/main.page');
const VoiceAPIPage = require('../pageobjects/voice-api.page');
const SipTrunksPage = require('../pageobjects/sip-trunks.page');
const Elements = require('../pageobjects/elements');
const InternationalNumbersPage = require('../pageobjects/international-numbers.page')
const VideoApiPage = require('../pageobjects/video-api.page');
const LoginPage = require('../pageobjects/login.page');
describe('Telnyx product journey', () => {
    beforeEach(async()=>{
        await MainPage.open();
    });
    it('check Voice API product', async () => {
        await Elements.clickButtonCloseModal()
        await MainPage.clickProductVoiceAPI()
        await expect(browser).toHaveUrlContaining('voice-api')
        await expect(Elements.title).toHaveTextContaining('Voice API')
        await VoiceAPIPage.clickButtonSignUpAndStartBuilding()
        await expect(browser).toHaveUrlContaining('sign-up')
        await expect(Elements.title).toHaveTextContaining('Create a free account')
    });
    it('check Elastic SIP Trunking product', async () => {

        await MainPage.clickProductElasticSIPTrunking()
        await expect(browser).toHaveUrlContaining('sip-trunks')
        await expect(Elements.title).toHaveTextContaining('SIP Trunking for instant, unlimited global scale')
        await SipTrunksPage.clickButtonTalkToAnExpert()
        await expect(browser).toHaveUrlContaining('contact-us')
        await expect(Elements.title).toHaveTextContaining('Talk to an expert')
    });
   
    it('check International Numbers product(PSTN)', async () => {
        await MainPage.clickProductInternationalNumbers()
        await expect(browser).toHaveUrlContaining('/use-cases/international-numbers')
        await expect(Elements.title).toHaveTextContaining('with international numbers')
        await InternationalNumbersPage.clickLinkPSTN()
        await expect(browser).toHaveUrlContaining('/products/global-cloud-communications-platform')
        await expect(Elements.title).toHaveTextContaining('Global Cloud Communications')
    });
    it('check International Numbers product(Toll-free Numbers)', async () => {

        await MainPage.clickProductInternationalNumbers()
        await InternationalNumbersPage.clickLinkTollFreeNumbers()
        await expect(browser).toHaveUrlContaining('/products/toll-free-numbers')
        await expect(InternationalNumbersPage.title).toHaveTextContaining('Get Your Toll-Free 800 Number in')
    });
    it('check International Numbers product(FastPort)', async () => {

        await MainPage.clickProductInternationalNumbers()
        await InternationalNumbersPage.clickLinkFastPort()
        await expect(browser).toHaveUrlContaining('/products/number-porting')
        await expect(Elements.title).toHaveTextContaining('Hassle-free number porting')
    });
    it('check Video API product', async () => {
        await MainPage.clickProductVideoAPI()
        await expect(browser).toHaveUrlContaining('/products/video-api')
        await expect(Elements.title).toHaveTextContaining('Video API')
        await VideoApiPage.clickButtonGetStarted()
        await expect(browser).toHaveUrlContaining('portal.telnyx')
        await expect(LoginPage.title).toHaveTextContaining('Log in')
    });
   
});


