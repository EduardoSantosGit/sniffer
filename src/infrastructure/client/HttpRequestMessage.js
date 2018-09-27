export default class HttpRequestMessage
{

    constructor(method, uri)
    {
        this._method = method
        this._uri = uri
    }

    get httpContent(){
        return this._httpContent
    }

    set httpContent(value){
        this._httpContent = value
    }

    get httpRequestHeaders(){
        return this._httpRequestHeaders
    }

    set httpRequestHeaders(value){
        this._httpRequestHeaders = value
    }

    get method(){
        return this._method
    }

    set method(value){
        this._method = value
    }

    get uri(){
        return this._uri
    }

    set uri(value){
        this._uri = value
    }

    dispose(){
        
    }

}