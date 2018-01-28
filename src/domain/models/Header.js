export default class Header {

    constructor(json = null){
        if (json == null || json === undefined)
            return;
        
        this.date= json.date
        this.connection = json.connection
        this.contentEncoding = json.contentEncoding
        this.contentType = json.contentType
        this.transferEncoding = json.transferEncoding
        this.acceptRanges = json.acceptRanges
    }

    get date(){
        return this._date
    }

    set date(value){
        this._date = value
    }

    get connection(){
        return this._connection
    }

    set connection(value){
        this._connection = value
    }

    get contentEncoding(){
        return this._contentEncoding
    } 

    set contentEncoding(value){
        this._contentEncoding = value
    }

    get contentType(){
        return this._contentType
    }

    set contentType(value){
        this._contentType = value
    }

    get transferEncoding(){
        return this._transferEncoding
    }

    set transferEncoding(value){
        this._transferEncoding = value
    }

    get acceptRanges(){
        return this._acceptRanges
    }

    set acceptRanges(value){
        this._acceptRanges = value
    }

    toJSON(){
        return {
            "date" : this.date,
            "connection" : this.connection,
            "content-encoding" : this.contentEncoding,
            "content-type" : this.contentType,
            "Transfer-Encoding" : this.transferEncoding,
            "Accept-Ranges" : this.acceptRanges
        }
    }

}