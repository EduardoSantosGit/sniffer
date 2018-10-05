import EcommerceService from '../../../src/infrastructure/services/EcommerceService'
import { expect } from 'chai'

describe('Ecommerce Service', function () {

    it('test method getInfoEcommerce return html ecommerce', async function () {

        let service = new EcommerceService();
        let result = await service.getInfoEcommerce("submarino", "relogio");
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK")
        expect(result.value).to.not.null

    })
})