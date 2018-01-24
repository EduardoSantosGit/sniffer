export default class Header {

    constructor(){

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

    

}