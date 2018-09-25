export default class HttpResponse 
{
    constructor(response = null)
    {
        if (response == null || response === undefined)
            return;
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


}