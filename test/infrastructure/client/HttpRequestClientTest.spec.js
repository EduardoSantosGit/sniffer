import HttpRequestClient from '../../../src/infrastructure/client/HttpRequestClient'
import { expect } from 'chai'

describe('HttpRequestClient client return httpresponse ok', function () {

    it('test method getAsync returns response', async function () {
    
        let client = new HttpRequestClient();
        let result = await client.getAsync("https://www.warnerbros.com/archive/spacejam/movie/jam.htm");

        expect(result.headers).to.not.null;
        expect(result.content).to.not.null;
        expect(result.statusCode).to.equal(200);
    })

    it('test method getAsync returns response not found', async function () {
    
        let client = new HttpRequestClient();
        let result = await client.getAsync("https://www.microsoft.com/pt-br/pt-ie/?rtc=1");

        expect(result.headers).to.not.null;
        expect(result.content).to.not.null;
        expect(result.statusCode).to.equal(404);
    })

});