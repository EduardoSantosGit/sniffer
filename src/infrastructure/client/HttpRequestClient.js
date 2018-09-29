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

    async postAsync(url, data)
    {
        return new Promise(function(resolve, reject){
            request.post({
                url: url,
                method: "POST",
                json: data
            }, function (error, response, body) {
                if(error)
                    reject(error)

                resolve(new HttpResponse(response))
            });
        })
    }

    async sendFormUrlEncodedContentAsync(url, message)
    {
        return new Promise(function(resolve, reject){
            request.post({
                url: url,
                method: "POST",
                form: message.httpContent
            }, function (error, response, body) {
                if(error)
                    reject(error)

                resolve(new HttpResponse(response))
            });
        })
    }

    async sendFormDataAsync(message)
    {

    }
}