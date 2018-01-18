export default class Site {

    constructor(json = null){
        if (json == null || json == undefined)
            return;

        this.name = json.name
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

}