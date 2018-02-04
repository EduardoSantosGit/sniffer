import Site from './Site'

export default class Head extends Site{

    constructor(json = null){
        if (json == null || json === undefined)
            return;
  
        super({name: json.name, family: json.family, ip : json.ip})
        this.css = json.css
    }

    get css(){
        return this._css
    }

    set css(value){
        this._css = value
    }

}