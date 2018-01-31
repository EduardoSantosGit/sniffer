import DataSiteRequestService from '../../../src/infrastructure/services/DataSiteRequestService'
import ScrapService from '../../../src/infrastructure/services/ScrapService'
import { expect } from 'chai'

describe('Scrap service', function () {

    it('test method parseBlockCss return array link head', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService(); 
        let scrapService = new ScrapService();
        let body = await dataSiteRequestService.getResponseBodySite("https://www.npmjs.com");

        let links = await scrapService.parseBlockCss(body);
        console.log("data ", JSON.stringify(links))
        expect(links).to.not.null
    })
})