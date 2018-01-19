export default class Site {

    constructor(json = null){
        if (json == null || json == undefined)
            return;

        this.name = json.name
        this.family = json.family
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

    get family(){
        return this._family
    }

    set family(value){
        this._family = value
    }

}