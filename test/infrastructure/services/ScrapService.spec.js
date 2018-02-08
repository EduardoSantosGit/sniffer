import DataSiteRequestService from '../../../src/infrastructure/services/DataSiteRequestService'
import ScrapService from '../../../src/infrastructure/services/ScrapService'
import { expect } from 'chai'

describe('Scrap service', function () {

    it('test method parseBlockCss return array link head', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService(); 
        let scrapService = new ScrapService();
        let body = await dataSiteRequestService.getResponseBodySite("https://www.npmjs.com");

        let links = await scrapService.parseBlockCss(body);
        expect(links).to.not.null
        expect(links[0].includes("css")).to.true;
    })

    it('test method parseBlockCss return array two items', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService(); 
        let scrapService = new ScrapService();
        let body = await dataSiteRequestService.getResponseBodySite("https://www.w3.org/");

        let links = await scrapService.parseBlockCss(body);
        expect(links).to.not.null
        expect(links[0].includes("css")).to.true;
    })
})