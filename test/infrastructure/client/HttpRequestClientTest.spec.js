import HttpRequestClient from '../../../src/infrastructure/client/HttpRequestClient'
import { expect } from 'chai'

describe('HttpRequestClient client', function () {

    it('test method getAsync returns response', async function () {
    
        let client = new HttpRequestClient();
        let result = await client.getAsync("https://www.submarino.com.br/");
        
        console.log(result)

        expect(result.length > 0).to.true;
        expect(result[0]).to.not.null;
        expect(result[1]).to.not.null;
    })

});