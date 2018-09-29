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

    it('test method postAsync returns response ok', async function () {
    
        let client = new HttpRequestClient();
        let json = { name : "test", email : "test@te" }
        let result = await client.postAsync("https://httpbin.org/post", json);

        expect(result.statusCode).to.equal(200);
    })

    it('test method postAsync returns response ok', async function () {
    
        let client = new HttpRequestClient();
        let form = { name : "test", email : "test@te" }
        let result = await client.sendFormUrlEncodedContentAsync("https://httpbin.org/post", form);
        console.log(result)
        expect(result.statusCode).to.equal(200);
    })

});