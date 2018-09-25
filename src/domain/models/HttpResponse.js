export default class HttpResponse 
{
    constructor(response = null)
    {
        if (response == null || response === undefined || response != typeof(object)) 
            return;

        this._content =  response.body
        this._headers = response.headers
        this._statusCode = response.statusCode
    }

    get content(){
        return this._content
    }

    set content(value){
        this._content = value
    }

    get headers(){
        return this._headers
    }

    set headers(value){
        this._headers = value
    }

    get statusCode(){
        return this._statusCode
    }

    set statusCode(value){
        this._statusCode = value
    }

}