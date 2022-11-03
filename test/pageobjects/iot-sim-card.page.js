const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class IOTSimCardPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get linkExplorePoint(){
        return $('a*=Explore Point of Sale IoT Solutions')
    }
    get linkSIMConnects(){
        return $('a*=588 carriers and counting')
    }
    get linkCostSaving(){
        return $('a*=cost-saving')
    }
    get linkCustomDataLinits(){
        return $('a*=custom data limits')
    }
    get linkAlerting(){
        return $('a*=alerting')
    }
    get linkLiveReports(){
        return $('a*=live reports')
    }
    get linkPublicOrPrivate (){
        return $('a*=public or private IP')
    } 
    get linkOverTheAir(){
        return $('a*=over-the-air SIM')
    }
    get title(){
        return $('.content h1')
    }
    get articleTitle(){
        return $('article h1')
    }
    get linkTelnyxWirelessPoint(){
        return $('a*=Telnyx Wireless for Point of Sale IoT')
    }
    get linkCustomerStory(){
        return $('a=Read the customer story')
    }
    get linkSustainability(){
        return $('a*=for Sustainability')
    }
    get linkIndustrialIoT(){
        return $('a*=for Industrial IoT')
    }
    get linkPointOfSaleIoT(){
        return $('a*=Telnyx Wireless for Point of Sale IoT')
    }
    get linkFleetManagement(){
        return $('a*=Telnyx Wireless for Fleet Management')
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to click links for jouerny to another page
     */

    async clickLinkExplorePoint(){
        await this.linkExplorePoint.click()
    }
    async clickLinkSIMConnects(){
        await this.linkSIMConnects.click()
    }
    async clickLinkCostSaving(){
        await this.linkCostSaving.click()
    }
    async clickLinkCustomDataLinits(){
        await this.linkCustomDataLinits.click()
    }
    async clickLinkAlerting(){
        await this.linkAlerting.click()
    }
    async clickLinkLiveReports(){
        await this.linkLiveReports.click()
    }
    async clickLinkPublicOrPrivate(){
        await this.linkPublicOrPrivate.click()
    }
    async clickLinkOverTheAir(){
        await this.linkOverTheAir.click()
    }

    async clickLinkTelnyxWirelessPoint(){
        await this.linkTelnyxWirelessPoint.click()
    }
    async clickLinkCustomerStory(){
        this.linkCustomerStory.click()
    }
    async clickLinkSustainability(){
        this.linkSustainability.click()
    }
    async clickLinkIndustrialIoT(){
        this.linkIndustrialIoT.click()
    }
    async clickLinkPointOfSaleIoT(){
        this.linkPointOfSaleIoT.click()
    }
    async clickLinkFleetManagement(){
        this.linkFleetManagement.click()
    }
    
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products/iot-sim-card');
    }
}

module.exports = new IOTSimCardPage();
