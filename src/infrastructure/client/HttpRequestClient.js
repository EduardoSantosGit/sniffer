import request from 'request'
import HttpResponse from '../../domain/models/HttpResponse'

export default class HttpRequestClient 
{

    async getAsync(url)
    {
        return new Promise(function(resolve, reject){
            request.get(url, function (error, response, body) {
                if(error)
                    reject(error)

                resolve(new HttpResponse(response))
            });
        })   
    }

}